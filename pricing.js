/**
 * Plan click → SA Invoice Pro billing checkout (PayFast via license server).
 */
(function () {
  var LICENSE = 'https://sa-invoice-license.onrender.com'

  document.querySelectorAll('.buy').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var plan = btn.getAttribute('data-plan') || 'shop'
      var email = window.prompt('Email for the license (required)', '') || ''
      email = email.trim().toLowerCase()
      if (!email || email.indexOf('@') < 0) {
        alert('Enter a valid email so seats attach to your account after payment.')
        return
      }
      // Prefer API checkout with auto-redirect to PayFast
      var url =
        LICENSE +
        '/api/billing/checkout?redirect=1&plan=' +
        encodeURIComponent(plan) +
        '&email=' +
        encodeURIComponent(email)
      window.location.href = url
    })
  })
})()
