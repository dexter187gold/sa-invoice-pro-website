/**
 * Plan click → payment portal redirect.
 * When PayFast/Stripe is configured on the license server, BUY_BASE points at
 * a server route that creates a checkout session and redirects.
 * Until then we send buyers to the license dashboard with plan preselected.
 */
(function () {
  var LICENSE = 'https://sa-invoice-license.onrender.com'
  // Future: LICENSE + '/api/billing/checkout?plan=' + plan
  var BUY_BASE = LICENSE + '/?checkout=1&plan='

  document.querySelectorAll('.buy').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var plan = btn.getAttribute('data-plan') || 'shop'
      var email = window.prompt('Email for the license (required)', '') || ''
      email = email.trim()
      if (!email || email.indexOf('@') < 0) {
        alert('Enter a valid email so we can attach the paid license to your account.')
        return
      }
      var url = BUY_BASE + encodeURIComponent(plan) + '&email=' + encodeURIComponent(email)
      window.location.href = url
    })
  })
})()
