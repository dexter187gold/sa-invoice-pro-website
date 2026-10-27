(() => {
  'use strict';
  const BILLING_API = 'https://sa-invoice-license.onrender.com/api/billing/checkout';
  const dialog = document.getElementById('checkout-dialog');
  const form = document.getElementById('checkout-form');
  const emailInput = document.getElementById('checkout-email');
  const selectedPlan = document.getElementById('selected-plan');
  const errorBox = document.getElementById('checkout-error');
  const submitButton = document.getElementById('checkout-submit');
  const closeButton = document.getElementById('checkout-close');
  const plans = {
    solo: { name: 'Solo', price: 'R299', seats: 1 },
    shop: { name: 'Shop', price: 'R599', seats: 5 },
    multi: { name: 'Multi-branch', price: 'R1,299', seats: 25 }
  };
  let activePlan = 'shop';

  function showError(message) {
    errorBox.textContent = message;
    errorBox.hidden = false;
  }
  function clearError() {
    errorBox.textContent = '';
    errorBox.hidden = true;
  }
  function openCheckout(plan) {
    activePlan = Object.prototype.hasOwnProperty.call(plans, plan) ? plan : 'shop';
    const details = plans[activePlan];
    selectedPlan.innerHTML = '<span>Selected plan</span><b></b><strong></strong>';
    selectedPlan.querySelector('b').textContent = details.name + ' · ' + details.seats + (details.seats === 1 ? ' seat' : ' seats');
    selectedPlan.querySelector('strong').textContent = details.price;
    clearError();
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
    window.setTimeout(() => emailInput.focus(), 50);
  }

  document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', () => openCheckout(button.dataset.plan));
  });
  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
  const requestedPlan = new URLSearchParams(window.location.search).get('plan');
  if (requestedPlan && plans[requestedPlan]) openCheckout(requestedPlan);

  form.addEventListener('submit', async event => {
    event.preventDefault();
    clearError();
    const email = emailInput.value.trim().toLowerCase();
    if (!emailInput.checkValidity() || !email) {
      emailInput.reportValidity();
      return;
    }
    const origin = window.location.origin;
    const returnUrl = new URL('payment-success.html', origin);
    returnUrl.searchParams.set('plan', activePlan);
    returnUrl.searchParams.set('email', email);
    const cancelUrl = new URL('payment-cancelled.html', origin);
    cancelUrl.searchParams.set('plan', activePlan);

    submitButton.disabled = true;
    submitButton.innerHTML = 'Preparing secure checkout…';
    try {
      const url = new URL(BILLING_API);
      url.searchParams.set('plan', activePlan);
      url.searchParams.set('email', email);
      url.searchParams.set('return_url', returnUrl.toString());
      url.searchParams.set('cancel_url', cancelUrl.toString());
      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
        mode: 'cors',
        credentials: 'omit'
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.ok || !data.configured || !data.processUrl || !data.fields) {
        const message = data.error || 'Checkout is temporarily unavailable. Please contact sainvoicepro@gmail.com before attempting payment.';
        throw new Error(message);
      }
      const paymentHost = new URL(data.processUrl).hostname;
      if (!['www.payfast.co.za', 'sandbox.payfast.co.za'].includes(paymentHost)) {
        throw new Error('The checkout service returned an unrecognised payment destination. No payment was started.');
      }
      const payForm = document.createElement('form');
      payForm.method = 'POST';
      payForm.action = data.processUrl;
      payForm.acceptCharset = 'UTF-8';
      Object.entries(data.fields).forEach(([name, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = String(value == null ? '' : value);
        payForm.appendChild(input);
      });
      document.body.appendChild(payForm);
      submitButton.innerHTML = 'Redirecting to PayFast…';
      payForm.submit();
    } catch (error) {
      showError(error && error.message ? error.message : 'Checkout could not be started. Please try again or contact support.');
      submitButton.disabled = false;
      submitButton.innerHTML = 'Try checkout again <span>↗</span>';
    }
  });
})();