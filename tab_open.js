document.addEventListener('DOMContentLoaded', function () {
  var tabs = document.querySelectorAll('.nav a');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function (event) {
      event.preventDefault();
      var activeTabs = document.querySelectorAll('.active');
      activeTabs.forEach(function (tab) {
        tab.classList.remove('active');
      });

      tab.parentElement.classList.add('active');
      var anchor = event.target;
      var activePaneID = anchor.getAttribute('href');
      var activePane = document.querySelector(activePaneID);
      document.querySelectorAll('.tab-pane').forEach(function (pane) {
        pane.classList.remove('active');
        pane.classList.remove('in');
      });
      activePane.classList.add('active');
      setTimeout(function () { // Timeout for the fade effect
        activePane.classList.add('in');
      }, 250);
    });
  });
});
