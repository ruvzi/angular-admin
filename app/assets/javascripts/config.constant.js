'use strict';

/**
 * Config constant
 */
app.constant('APP_MEDIAQUERY', {
    'desktopXL': 1200,
    'desktop': 992,
    'tablet': 768,
    'mobile': 480
});
app.constant('JS_REQUIRES', {
    //*** Scripts
    scripts: {
        //*** Javascript Plugins
        'modernizr': ['/assets/modernizr/modernizr.js'],
        'moment': ['/assets/moment/moment.min.js'],
        'spin': '/assets/ladda/spin.min.js',

        //*** jQuery Plugins
        'perfect-scrollbar-plugin': ['/assets/perfect-scrollbar/perfect-scrollbar.min.js', '/assets/perfect-scrollbar/perfect-scrollbar.min.css'],
        'ladda': ['/assets/ladda/spin.min.js', '/assets/ladda/ladda.min.js', '/assets/ladda/ladda-themeless.min.css'],
        'sweet-alert': ['/assets/sweet-alert/sweet-alert.min.js', '/assets/sweet-alert/sweet-alert.css'],
        'chartjs': '/assets/chartjs/Chart.min.js',
        'jquery-sparkline': '/assets/sparkline/jquery.sparkline.min.js',
        'ckeditor-plugin': '/assets/ckeditor/ckeditor.js',
        'jquery-nestable-plugin': ['/assets/ng-nestable/jquery.nestable.js', '/assets/ng-nestable/jquery.nestable.css'],
        'touchspin-plugin': '/assets/bootstrap-touchspin/jquery.bootstrap-touchspin.min.js',

        //*** Controllers
        'dashboardCtrl': 'assets/controllers/dashboardCtrl.js',
        'iconsCtrl': 'assets/controllers/iconsCtrl.js',
        'vAccordionCtrl': 'assets/controllers/vAccordionCtrl.js',
        'ckeditorCtrl': 'assets/controllers/ckeditorCtrl.js',
        'laddaCtrl': 'assets/controllers/laddaCtrl.js',
        'ngTableCtrl': 'assets/controllers/ngTableCtrl.js',
        'cropCtrl': 'assets/controllers/cropCtrl.js',
        'asideCtrl': 'assets/controllers/asideCtrl.js',
        'toasterCtrl': 'assets/controllers/toasterCtrl.js',
        'sweetAlertCtrl': 'assets/controllers/sweetAlertCtrl.js',
        'mapsCtrl': 'assets/controllers/mapsCtrl.js',
        'chartsCtrl': 'assets/controllers/chartsCtrl.js',
        'calendarCtrl': 'assets/controllers/calendarCtrl.js',
        'nestableCtrl': 'assets/controllers/nestableCtrl.js',
        'validationCtrl': ['assets/controllers/validationCtrl.js'],
        'userCtrl': ['assets/controllers/userCtrl.js'],
        'selectCtrl': 'assets/controllers/selectCtrl.js',
        'wizardCtrl': 'assets/controllers/wizardCtrl.js',
        'uploadCtrl': 'assets/controllers/uploadCtrl.js',
        'treeCtrl': 'assets/controllers/treeCtrl.js',
        'inboxCtrl': 'assets/controllers/inboxCtrl.js',

        //*** Filters
        'htmlToPlaintext': 'assets/filters/htmlToPlaintext.js'
    },
    //*** angularJS Modules
    modules: [{
        name: 'perfect_scrollbar',
        files: ['/assets/perfect-scrollbar/angular-perfect-scrollbar.js']
    }, {
        name: 'toaster',
        files: ['/assets/toaster/toaster.js', '/assets/toaster/toaster.css']
    }, {
        name: 'angularBootstrapNavTree',
        files: ['/assets/angular-bootstrap-nav-tree/abn_tree_directive.js', '/assets/angular-bootstrap-nav-tree/abn_tree.css']
    }, {
        name: 'angular-ladda',
        files: ['/assets/ladda/angular-ladda.min.js']
    }, {
        name: 'ngTable',
        files: ['/assets/ng-table/ng-table.min.js', '/assets/ng-table/ng-table.min.css']
    }, {
        name: 'ui.select',
        files: ['/assets/ui-select/select.min.js', '/assets/ui-select/select.min.css', '/assets/ui-select/select2.css', '/assets/ui-select/select2-bootstrap.css', '/assets/ui-select/selectize.bootstrap3.css']
    }, {
        name: 'ui.mask',
        files: ['/assets/ui-utils/mask.js']
    }, {
        name: 'angular-bootstrap-touchspin',
        files: ['/assets/bootstrap-touchspin/angular.bootstrap-touchspin.js', '/assets/bootstrap-touchspin/jquery.bootstrap-touchspin.min.css']
    }, {
        name: 'ngImgCrop',
        files: ['/assets/ngImgCrop/ng-img-crop.js', '/assets/ngImgCrop/ng-img-crop.css']
    }, {
        name: 'angularFileUpload',
        files: ['/assets/angular-file-upload/angular-file-upload.min.js', '/assets/angular-file-upload/directives.js']
    }, {
        name: 'ngAside',
        files: ['/assets/angular-aside/angular-aside.min.js', '/assets/angular-aside/angular-aside.min.css']
    }, {
        name: 'truncate',
        files: ['/assets/angular-truncate/truncate.js']
    }, {
        name: 'oitozero.ngSweetAlert',
        files: ['/assets/sweet-alert/ngSweetAlert.min.js']
    }, {
        name: 'monospaced.elastic',
        files: ['/assets/angular-elastic/elastic.js']
    }, {
        name: 'ngMap',
        files: ['/assets/angular-google-maps/ng-map.min.js']
    }, {
        name: 'tc.chartjs',
        files: ['/assets/chartjs/tc-angular-chartjs.min.js']
    }, {
        name: 'sparkline',
        files: ['/assets/sparkline/angular-sparkline.js']
    }, {
        name: 'flow',
        files: ['/assets/ng-flow/ng-flow-standalone.min.js']
    }, {
        name: 'uiSwitch',
        files: ['/assets/angular-ui-switch/angular-ui-switch.min.js', '/assets/angular-ui-switch/angular-ui-switch.min.css']
    }, {
        name: 'ckeditor',
        files: ['/assets/ckeditor/angular-ckeditor.min.js']
    }, {
        name: 'mwl.calendar',
        files: ['/assets/angular-bootstrap-calendar/angular-bootstrap-calendar.js', '/assets/angular-bootstrap-calendar/angular-bootstrap-calendar-tpls.js', '/assets/angular-bootstrap-calendar/angular-bootstrap-calendar.min.css']
    }, {
        name: 'ng-nestable',
        files: ['/assets/ng-nestable/angular-nestable.js']
    }, {
        name: 'vAccordion',
        files: ['/assets/v-accordion/v-accordion.min.js', '/assets/v-accordion/v-accordion.min.css']
    }]
});
