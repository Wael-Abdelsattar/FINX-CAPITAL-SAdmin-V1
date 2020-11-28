$(document).ready(function() {
    let id = 0;
    // Fullscreen Functionality
    $('.go-full-screen').on('click', function() {
        if (window.innerHeight == screen.height) {
            $(this).removeClass('op-active');
            document.exitFullscreen();
        } else {
            $(this).addClass('op-active');
            document.body.requestFullscreen();
        }
    });

    document.addEventListener('fullscreenchange', (event) => {
        if (window.innerHeight != screen.height) {
            $('.go-full-screen').removeClass('op-active');
        }
    });

    // Giving Rest of Screen Height to Tab Content
    

    // Change Cursor
    $('.pointer-icon').on('click', function() {
        $('body').toggleClass('pointer-activated');
    });

    // Highlight Columns onClick
    function removeHighlight() {
        $('.data-highlight>div')
            .removeClass(`red-card`)
            .removeClass(`blue-card`)
            .removeClass(`dark-grey-card`)
            .addClass(`grey-card`);
        $('.data-highlight>div').find('.section-title').addClass('grey-title');
        $('.data-highlight').removeClass('active-column');
        $('.products-carousel')
            .removeClass(`carousel-red`)
            .removeClass(`carousel-blue`)
            .removeClass(`carousel-dark-grey`);
        $('.loan-details')
            .removeClass(`payment-red`)
            .removeClass(`payment-blue`)
            .removeClass(`payment-dark-grey`);
    }
    $('.data-highlight').each(function() {
        $(this).on('click', function() {
            const color = $(this).data('color');
            const innerEl = $(this).find('>div');
            if ($(this).hasClass('active-column')) {
                removeHighlight();
                return;
            }
            removeHighlight();
            $(this).addClass('active-column');
            innerEl.removeClass('grey-card').addClass(`${color}-card`);
            if (color === 'red' || color === 'blue') {
                $(innerEl).find('.section-title').removeClass('grey-title');
            } else {
                $(innerEl).find('.section-title').addClass('grey-title');
            }
            $('.products-carousel')
                .removeClass(`carousel-red`)
                .removeClass(`carousel-blue`)
                .removeClass(`carousel-dark-grey`)
                .addClass(`carousel-${color}`);

            $('.loan-details')
                .removeClass(`payment-red`)
                .removeClass(`payment-blue`)
                .removeClass(`payment-dark-grey`)
                .addClass(`payment-${color}`);
        });
    });

    // Top Corner Buttons
    checkVisibility();

    function checkVisibility() {
        setTimeout(() => {
            const redEl = $('.grid-blocks > .red-data');
            const blueEl = $('.grid-blocks > .blue-data');
            const blackEl = $('.grid-blocks > .dark-grey-data');
            if (
                redEl.is(':visible') &&
                blueEl.is(':visible') &&
                blackEl.is(':visible')
            ) {
                redEl.closest('.tab-content').addClass('three');
            } else {
                redEl.closest('.tab-content').removeClass('three');
            }
        }, 0);
    }

    $('.buttons .btn:not([data-toggle="modal"])').each(function() {
        $(this).on('click', function() {
            const color = $(this).data('color');
            const targetData = $(this).data('target');
            if (
                $(this).hasClass('red-icon') ||
                $(this).hasClass('blue-icon') ||
                $(this).hasClass('grey-icon')
            ) {
                $(
                    '.buttons.only-one .btn.red-icon, .buttons.only-one .btn.blue-icon, .buttons.only-one .btn.grey-icon'
                ).removeClass('op-active');
            }
            $(this).toggleClass('op-active');
            checkVisibility();

            if (targetData) {
                if ($(this).hasClass('op-active')) {
                    $(`.${targetData}`).show();
                } else {
                    $(`.${targetData}`).hide();
                }
            }
            // For Highlighting cards
            // if (targetData) {
            //   if ($(this).hasClass('op-active')) {
            //     if (color === 'red' || color === 'blue') {
            //       $(`.${targetData}>div`)
            //         .find('.section-title')
            //         .removeClass('grey-title');
            //     }
            //     $(`.${targetData}>div`)
            //       .removeClass(`grey-card`)
            //       .addClass(`${color}-card`);
            //   } else {
            //     $(`.${targetData}>div`).find('.section-title').addClass('grey-title');
            //     $(`.${targetData}>div`)
            //       .removeClass(`${color}-card`)
            //       .addClass(`grey-card`);
            //   }
            // }
        });
    });

    // Adding Products
    // $('.products-carousel .products__product-item > div').each(function () {
    //   $(this).on('click', function () {
    //     const id = $(this).attr('id');
    //     $('.bubbles-list li[data-target="' + id + '"]').trigger('click');
    //   });
    // });

    // Add New Document
    $('.add-new-file').on('click', function() {
        id += 1;
        const uploadNewFile = `
    <div>
      <input type="text" class="form-control small-height mb-1">
      <input type="file" id="new-file-${id}" onchange="DocumentFileUploadChange(this)" hidden>
      <label class="file" for="new-file-${id}">
<button type="button" class="btn btn-icon bg-danger remove-file">
                            <i class="icon-delete"></i>
                          </button>
        <span class="icon">
          <img src="../assets/images/add-more.svg" alt="">
        </span>
        <h5>Upload</h5>
      </label>
    </div>
  `;
        $('.files').append(uploadNewFile).clone(true);




        $('.remove-file').off("click").on("click", function (e) {
            //$(e.target).closest('.fileDivClass').remove();
            debugger;
            var fileDiv = $(e.target).closest('.file');

            if (fileDiv.length > 0 && (fileDiv.parent().attr('class') == 'fileDivClass' || fileDiv.parent().attr('class') == 'fileParent')) {//ordiginal fixed row

                if (fileDiv.find('h5').text() == 'Upload') {
                    return;
                }

                var removeFileButton = fileDiv.find('button');//$(e.target).parent();
                fileDiv.find('.icon').remove();
                fileDiv.find('h5').remove();
                fileDiv.append('<input type="file" id="new-file-' + (++filesNewCounter) + '" onchange="DocumentFileUploadChange(this)" hidden=""><label class="file" for="new-file-' + filesNewCounter + '"><span class="icon"><img src="/assets/images/add-more.svg" alt=""></span><h5>Upload</h5></label >');
                fileDiv.attr('class', 'fileParent');
                fileDiv.find('.file').append(removeFileButton);
            }
            else {

                var inputFileName = fileDiv.parent().find('input[type=text]');
                //if (inputFileName.val().trim() == '') {
                if (fileDiv.find('h5').text() == 'Upload') {
                    fileDiv.parent().remove();
                }
                else {
                    inputFileName.val('');
                    fileDiv.find('h5').text('Upload');
                }
            }
            //alert(111);
        });



    });

    // $('#brochures .card .card-header').each(function () {
    //   $(this).on('click', function () {
    //     const name = $(this).text().trim();
    //     $('.bubbles-list li:contains("' + name + '")').trigger('click');
    //   });
    // });
    $('.bubbles-list li').each(function() {
        if ($(this).hasClass('active')) {} else {}
        $(this).on('click', function() {
            const name = $(this).text().trim();
            const color = $(this).data('color');
            const target = `#${$(this).data('target')}`;
            if (
                $(this).closest('.bubbles-list').hasClass('only-one') &&
                !$(this).hasClass('active')
            ) {
                $(this).closest('.bubbles-list').find('li').removeClass('active');
            }
            $(this).toggleClass('active');
            if ($(this).closest('.bubbles-list').hasClass('change-onlyself')) {
                return;
            }
            setTimeout(() => {
                if ($(this).closest('.bubbles-list').find('.active').length) {
                    $(this)
                        .closest('.card')
                        .removeClass('grey-card')
                        .addClass(`${color}-card`);
                } else {
                    $(this)
                        .closest('.card')
                        .removeClass(`${color}-card`)
                        .addClass('grey-card');
                }
            }, 0);
            if (target) {
                if ($(this).hasClass('active')) {
                    $('#brochures .card-header:contains("' + name + '")')
                        .parent()
                        .removeClass('grey-card')
                        .addClass(`${color}-card`);
                    $(target).addClass('selected');
                } else {
                    $('#brochures .card-header:contains("' + name + '")')
                        .parent()
                        .removeClass(`${color}-card`)
                        .addClass('grey-card');
                    $(target).removeClass('selected');
                }
            }
        });
    });

    // Datepicker
    if ($('.datepicker').length) {
        $('.datepicker').datepicker({
            changeMonth: true,
            changeYear: true,
            showButtonPanel: true,
            autoclose: true,
            todayHighlight: true,
            showButtonPanel: false,
            dateFormat: 'dd/mm/yy',
            //   beforeShow: function (input, inst) {
            //     var rect = input.getBoundingClientRect();
            //     setTimeout(function () {
            //       inst.dpDiv.css({ top: rect.top + 40, left: rect.left + 0 });
            //     }, 0);
            // }
        });
    }

    if ($('.first-payment-datepicker').length) {
        $('.first-payment-datepicker').datepicker({
            changeMonth: true,
            changeYear: true,
            showButtonPanel: true,
            autoclose: true,
            todayHighlight: true,
            showButtonPanel: false,
            maxDate: 30,
            dateFormat: 'dd/mm/yy',
        });
    }

    // DataTable
    if ($('.datatable').length) {
        $('.datatable').each(function() {
            if ($(this).hasClass('with-pagination')) {
                $(this).DataTable({
                    searching: true,
                    info: false,
                    fixedHeader: true,
                    pageLength: 14,
                    scrollCollapse: true,
                    order: [
                        [0, 'desc'],
                        [1, 'desc'],
                        [3, 'desc'],
                        [5, 'desc'],
                        [6, 'desc'],
                        [7, 'desc'],
                    ],
                    columnDefs: [
                        { orderable: false, targets: 2 },
                        { orderable: false, targets: 4 },
                        { orderable: false, targets: -1 },
                    ],
                    initComplete: function() {
                        this.api()
                            .columns('.filter-column')
                            .every(function() {
                                var column = this;
                                var select = $(`
                  <div class="dropdown select-dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Filter
                    </button>
                    <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a class="dropdown-item reset-filter" href="#"></a>
                      </div>
                `).appendTo($(column.header()));

                                select.on('click', '.dropdown-item', function() {
                                    column.search($(this).text().trim().toLowerCase()).draw();
                                });
                                column
                                    .data()
                                    .unique()
                                    .sort()
                                    .each(function(d, j) {
                                        const value = d.replace(/(<([^>]+)>)/gi, '');
                                        select
                                            .find('.dropdown-menu')
                                            .append(`<a class="dropdown-item" href="#">${value}</a>`);
                                    });
                            });
                    },
                });
            } else if ($(this).hasClass('dealership-list')) {
                $(this).DataTable({
                    searching: true,
                    info: false,
                    fixedHeader: true,
                    pageLength: 14,
                    scrollCollapse: true,
                    order: [
                        [0, 'desc'],
                        [1, 'desc'],
                        [2, 'desc'],                        
                    ],
                    columnDefs: [
                        { orderable: false, targets: 3 },
                        { orderable: false, targets: 4 },
                        { orderable: false, targets: 5 },
                        { orderable: false, targets: 6 },
                        { orderable: false, targets: 7 },
                    ],
                    // bAutoWidth: false,
                    aoColumns: [
                        { sWidth: '15%' },
                        { sWidth: '8%' },
                        { sWidth: '13%' },
                        { sWidth: '20%' },
                        { sWidth: '10%' },
                        { sWidth: '' },
                        { sWidth: '8%' },
                        { sWidth: '8%' },
                    ],
                });
            } else if ($(this).hasClass('agreement-list')) {
                $(this).DataTable({
                    paging: true,
                    searching: true,
                    info: false,
                    fixedHeader: true,
                    pageLength: 14,
                    scrollCollapse: true,
                    order: [
                        [0, 'desc'],
                        [1, 'desc'],
                        [2, 'desc'],
                        [3, 'desc'],                        
                        [4, 'desc'],
                        [5, 'desc'],
                        [6, 'desc'],
                    ],
                    columnDefs: [
                        { orderable: false, targets: 0 },
                        { orderable: false, targets: 1 },
                        { orderable: false, targets: 2 },
                        { orderable: false, targets: 3 },
                        { orderable: false, targets: 4 },
                        { orderable: false, targets: 5 },
                        { orderable: false, targets: 6 },
                    ],
                    // bAutoWidth: false,
                    aoColumns: [
                        { sWidth: '15%' },
                        { sWidth: '15%' },
                        { sWidth: '15%' },
                        { sWidth: '20%' },
                        { sWidth: '15%' },
                        { sWidth: '15%' },
                        { sWidth: '5%' },
                    ],
                });
            } else if ($(this).hasClass('program-datatable')) {
                $(this).DataTable({
                    paging: true,
                    searching: true,
                    info: false,
                    fixedHeader: true,
                    pageLength: 12,
                    scrollCollapse: true,
                    order: [
                        [0, 'desc'],
                        [1, 'desc'],
                        [2, 'desc'],
                        [3, 'desc'],                        
                        [4, 'desc'],
                        [5, 'desc'],
                        [6, 'desc'],
                    ],
                    columnDefs: [
                        { orderable: true, targets: 0 },
                        { orderable: true, targets: 1 },
                        { orderable: true, targets: [2], className: 'text-center'},
                        { orderable: true, targets: 3 },
                        { orderable: true, targets: 4 },
                        { orderable: true, targets: 5 },
                        { orderable: true, targets: 6 },
                    ],
                    // bAutoWidth: false,
                    aoColumns: [
                        { sWidth: '8%' },
                        { sWidth: '16%' },
                        { sWidth: '16%' },
                        { sWidth: '18%' },
                        { sWidth: '17%' },
                        { sWidth: '17%' },
                        { sWidth: '8%' },
                    ],
                });
            } else if ($(this).hasClass('dealership-staff')) {
                $(this).DataTable({
                    paging: false,
                    searching: false,
                    info: false,
                    fixedHeader: true,
                    // scrollY: '288px',
                    scrollCollapse: true,
                    order: [
                        [0, 'desc'],
                        // [1, 'desc'],
                        // [2, 'desc'],
                        // [3, 'desc'],
                        // [4, 'desc'],
                        // [5, 'desc'],
                    ],
                    columnDefs: [
                        { orderable: false, targets: 1 },
                        { orderable: false, targets: 2 },
                        { orderable: false, targets: 3 },
                        { orderable: false, targets: 4 },
                        { orderable: false, targets: 5 },
                    ],
                    // bAutoWidth: false,
                    aoColumns: [
                        { sWidth: '20%' },
                        { sWidth: '20%' },
                        { sWidth: '15%' },
                        { sWidth: '25%' },
                        { sWidth: '10%' },
                        { sWidth: '10%' },
                    ],
                });
            } else if ($(this).hasClass('white-labling')) {
                $(this).DataTable({
                    paging: false,
                    searching: false,
                    info: false,
                    fixedHeader: true,
                    // scrollY: '288px',
                    scrollCollapse: true,
                    order: [
                        [0, 'desc'],
                        [1, 'desc'],
                        [2, 'desc'],
                        [3, 'desc'],
                        [4, 'desc'],
                    ],
                    // columnDefs: [
                    //     { orderable: true, targets: 1 },
                    //     { orderable: true, targets: 2 },
                    //     { orderable: true, targets: 3 },
                    //     { orderable: true, targets: 4 },
                    //     { orderable: true, targets: 5 },
                    // ],
                    
                    aoColumns: [
                        { sWidth: '20%' },
                        { sWidth: '25%' },
                        { sWidth: '25%' },
                        { sWidth: '20%' },
                        { sWidth: '10%' },
                    ],
                });
            } else if ($(this).hasClass('cs-rm-list')) {
                $(this).DataTable({
                    searching: true,
                    info: false,
                    fixedHeader: true,
                    pageLength: 14,
                    scrollCollapse: true,
                    order: [
                        [0, 'desc'],                      
                    ],
                    columnDefs: [
                        { orderable: false, targets: 0 },
                        { orderable: false, targets: 1 },
                        { orderable: false, targets: 2 },
                        { orderable: false, targets: 3 },
                        { orderable: false, targets: 4 },
                    ],
                    // bAutoWidth: false,
                    aoColumns: [
                        { sWidth: '25%' },
                        { sWidth: '25%' },
                        { sWidth: '25%' },
                        { sWidth: '15%' },
                        { sWidth: '10%' },
                    ],
                });
            } else if ($(this).hasClass('insurance-list')) {
                $(this).DataTable({
                    searching: true,
                    info: false,
                    fixedHeader: true,
                    pageLength: 14,
                    scrollCollapse: true,
                    order: [
                        [0, 'desc'],
                        [1, 'desc'],                      
                    ],
                    columnDefs: [
                        { orderable: false, targets: 0 },
                        { orderable: false, targets: 1 },
                        { orderable: false, targets: 2 },
                        { orderable: false, targets: 3 },
                        { orderable: false, targets: 4 },
                        { orderable: false, targets: 5 },
                    ],
                    // bAutoWidth: false,
                    aoColumns: [
                        { sWidth: '20%' },
                        { sWidth: '15%' },
                        { sWidth: '20%' },
                        { sWidth: '25%' },
                        { sWidth: '15%' },
                        { sWidth: '10%' },
                    ],
                });
            } else if ($(this).hasClass('users-list')) {
                $(this).DataTable({
                    paging: false,
                    searching: false,
                    info: false,
                    fixedHeader: true,
                    // scrollY: '288px',
                    scrollCollapse: true,
                    order: [
                        [0, 'desc'],
                        [1, 'desc'],
                        [2, 'desc'],
                        [3, 'desc'],
                        [4, 'desc'],
                        [5, 'desc'],                      
                    ],
                    columnDefs: [
                        { orderable: false, targets: 0 },
                        { orderable: false, targets: 1 },
                        { orderable: false, targets: 2 },
                        { orderable: false, targets: 3 },
                        { orderable: false, targets: 4 },
                        { orderable: false, targets: 5 },
                    ],
                    // bAutoWidth: false,
                    aoColumns: [
                        { sWidth: '20%' },
                        { sWidth: '15%' },
                        { sWidth: '15%' },
                        { sWidth: '20%' },
                        { sWidth: '15%' },
                        { sWidth: '15%' },
                    ],
                });
            } else if ($(this).hasClass('rem-dealership')) {
                $(this).DataTable({
                    paging: false,
                    searching: false,
                    info: false,
                    fixedHeader: true,
                    // scrollY: '288px',
                    scrollCollapse: true,
                    order: [
                        [0, ''],
                        [1, 'desc'],
                        [2, ''],
                        [3, ''],
                        [4, 'desc'],
                        [5, 'desc'],                      
                    ],
                    columnDefs: [
                        { orderable: false, targets: 0 },
                        { orderable: false, targets: 1 },
                        { orderable: false, targets: 2 },
                        { orderable: false, targets: 3 },
                        { orderable: false, targets: 4 },
                        { orderable: false, targets: [5], className: 'text-right' },
                    ],
                    // bAutoWidth: false,
                    aoColumns: [
                        { sWidth: '20%' },
                        { sWidth: '25%' },
                        { sWidth: '20%' },
                        { sWidth: '20%' },
                        { sWidth: '15%' },
                        { sWidth: '' },
                    ],
                });
            } else if ($(this).hasClass('commission-datatable')) {
                $(this).DataTable({
                    paging: false,
                    searching: false,
                    info: false,
                    fixedHeader: true,
                    // scrollY: '288px',
                    scrollCollapse: true,
                    order: [
                        [0, 'desc'],
                        [1, 'desc'],
                        [2, 'desc'],
                        [3, 'desc'],
                        [4, 'desc'],
                        [5, 'desc'],
                    ],
                    columnDefs: [
                        { orderable: false, targets: 0 },
                        { orderable: false, targets: [1], className: 'text-center' },
                        { orderable: false, targets: [2], className: 'text-center' },
                        { orderable: false, targets: [3], className: 'text-center' },
                        { orderable: false, targets: [4], className: 'text-right' },
                        { orderable: false, targets: [5], className: 'text-center' },
                    ],
                    // bAutoWidth: false,
                    aoColumns: [
                        { sWidth: '20%' },
                        { sWidth: '15%' },
                        { sWidth: '15%' },
                        { sWidth: '15%' },
                        { sWidth: '20%' },
                        { sWidth: '15%' },
                    ],
                });
            } else if ($(this).hasClass('indiv-provider')) {
                $(this).DataTable({
                    paging: false,
                    searching: false,
                    info: false,
                    fixedHeader: true,
                    // scrollY: '288px',
                    scrollCollapse: true,
                    order: [
                        [0, ''],
                        [1, 'desc'],
                        [2, 'desc'],
                        [3, 'desc'],
                        [4, 'desc'],
                        [5, 'desc'],                      
                    ],
                    columnDefs: [
                        { orderable: false, targets: 0 },
                        { orderable: true, targets: [1], className: 'text-right' },
                        { orderable: true, targets: [2], className: 'text-right' },
                        { orderable: true, targets: [3], className: 'text-right' },
                        { orderable: true, targets: [4], className: 'text-right' },
                        { orderable: true, targets: [5], className: 'text-center' },
                    ],
                    // bAutoWidth: false,
                    aoColumns: [
                        { sWidth: '20%' },
                        { sWidth: '17%' },
                        { sWidth: '17%' },
                        { sWidth: '17%' },
                        { sWidth: '15%' },
                        { sWidth: '' },
                    ],
                });
            } else if ($(this).hasClass('rem-invoice')) {
                $(this).DataTable({
                    paging: false,
                    searching: false,
                    info: false,
                    fixedHeader: true,
                    // scrollY: '288px',
                    scrollCollapse: true,
                    order: [
                        [0, 'desc'],
                        [1, 'desc'],
                        [2, 'desc'],
                        [3, ''],
                        [4, ''],
                        [5, ''],                      
                        [6, ''],                      
                        [7, ''],                      
                        [8, ''],                      
                        [9, ''],                      
                        [10, ''],                                          
                    ],
                    columnDefs: [
                        { orderable: true, targets: 0 },
                        { orderable: true, targets: 1 },
                        { orderable: true, targets: [2], className: 'text-right' },
                        { orderable: false, targets: [3], className: 'text-right' },
                        { orderable: false, targets: [4], className: 'text-right' },
                        { orderable: false, targets: [5], className: 'text-right' },
                        { orderable: false, targets: [6], className: 'text-right' },
                        { orderable: false, targets: [7], className: 'text-right' },
                        { orderable: false, targets: [8], className: 'text-center' },
                        { orderable: false, targets: [9], className: 'text-right' },
                        { orderable: false, targets: [10], className: 'text-right' },
                    ],
                    // bAutoWidth: false,
                    aoColumns: [
                        { sWidth: '7%' },
                        { sWidth: '15%' },
                        { sWidth: '7%' },
                        { sWidth: '7%' },
                        { sWidth: '7%' },
                        { sWidth: '7%' },
                        { sWidth: '7%' },
                        { sWidth: '12%' },
                        { sWidth: '10%' },
                        { sWidth: '10%' },
                        { sWidth: '11%' },
                    ],
                });
            } else if ($(this).hasClass('indiv-product')) {
                $(this).DataTable({
                    paging: false,
                    searching: false,
                    info: false,
                    fixedHeader: true,
                    // scrollY: '288px',
                    scrollCollapse: true,
                    order: [
                        [0, 'desc'],
                        [1, 'desc'],
                        [2, 'desc'],
                        [3, ''],
                        [4, ''],
                        [5, ''],                      
                        [6, ''],                      
                        [7, ''],                      
                        [8, ''],                      
                        [9, ''],                      
                        [10, 'desc'],
                        [11, 'desc'],                                          
                    ],
                    columnDefs: [
                        { orderable: true, targets: 0 },
                        { orderable: true, targets: 1 },
                        { orderable: true, targets: 2 },
                        { orderable: false, targets: [3], className: 'text-right' },
                        { orderable: false, targets: [4], className: 'text-right' },
                        { orderable: false, targets: [5], className: 'text-right' },
                        { orderable: false, targets: [6], className: 'text-right' },
                        { orderable: false, targets: [7], className: 'text-right' },
                        { orderable: false, targets: [8], className: 'text-right' },
                        { orderable: false, targets: [9], className: 'text-right' },
                        { orderable: true, targets: [10], className: 'text-right' },
                        { orderable: true, targets: [11], className: 'text-right' },
                    ],
                    // bAutoWidth: false,
                    aoColumns: [
                        { sWidth: '7%' },
                        { sWidth: '10%' },
                        { sWidth: '12%' },
                        { sWidth: '7%' },
                        { sWidth: '7%' },
                        { sWidth: '7%' },
                        { sWidth: '7%' },
                        { sWidth: '7%' },
                        { sWidth: '7%' },
                        { sWidth: '7%' },
                        { sWidth: '12%' },
                        { sWidth: '10%' },
                    ],
                });
            }else if ($(this).hasClass('profit-report')) {
                $(this).DataTable({
                    paging: false,
                    searching: false,
                    info: false,
                    fixedHeader: true,
                    // scrollY: '288px',
                    scrollCollapse: true,
                    order: [
                        [0, 'desc'],
                        [1, 'desc'],
                        [2, 'desc'],
                        [3, 'desc'],
                        [4, 'desc'],
                        [5, 'desc'],                      
                        [6, 'desc'],                      
                        [7, 'desc'],                      
                        [8, 'desc'],                      
                        [9, 'desc'],
                    ],
                    columnDefs: [
                        { orderable: true, targets: 0 },
                        { orderable: true, targets: 1 },
                        { orderable: true, targets: 2 },
                        { orderable: false, targets: [3], className: 'text-right' },
                        { orderable: false, targets: [4], className: 'text-right' },
                        { orderable: false, targets: [5], className: 'text-right' },
                        { orderable: false, targets: [6], className: 'text-right' },
                        { orderable: false, targets: [7], className: 'text-right' },
                        { orderable: false, targets: [8], className: 'text-right' },
                        { orderable: false, targets: [9], className: 'text-right' },
                    ],
                    // bAutoWidth: false,
                    aoColumns: [
                        { sWidth: '10%' },
                        { sWidth: '10%' },
                        { sWidth: '10%' },
                        { sWidth: '10%' },
                        { sWidth: '8%' },
                        { sWidth: '8%' },
                        { sWidth: '12%' },
                        { sWidth: '8%' },
                        { sWidth: '12%' },
                        { sWidth: '12%' },
                    ],
                });
            } else if ($(this).hasClass('bank-list')) {
                $(this).DataTable({
                    searching: true,
                    info: false,
                    fixedHeader: true,
                    pageLength: 14,
                    scrollCollapse: true,
                    order: [
                        [0, 'desc'],
                        [1, 'desc'], 
                        [2, 'desc'],                      
                    ],
                    columnDefs: [
                        { orderable: false, targets: 0 },
                        { orderable: false, targets: 1 },
                        { orderable: false, targets: 2 },
                        { orderable: false, targets: 3 },
                        { orderable: false, targets: 4 },
                        { orderable: false, targets: 5 },
                    ],
                    // bAutoWidth: false,
                    aoColumns: [
                        { sWidth: '15%' },
                        { sWidth: '15%' },
                        { sWidth: '25%' },
                        { sWidth: '15%' },
                        { sWidth: '20%' },
                        { sWidth: '10%' },
                    ],
                });
            } else if ($(this).hasClass('datatable-default')) {
                $(this).DataTable({
                    paging: false,
                    searching: false,
                    info: false,
                    fixedHeader: true,
                    // scrollY: '288px',
                    scrollCollapse: true,
                    order: [
                        [0, 'desc'],
                        [1, 'desc'], 
                        [2, 'desc'],                      
                        [3, 'desc'],                      
                    ],

                    columnDefs: [
                        { orderable: true, targets: 0 },
                        { orderable: true, targets: 1 },
                        { orderable: true, targets: 2 },
                        { orderable: true, targets: 3 },
                    ],
                    // bAutoWidth: false,
                    aoColumns: [
                        { sWidth: '32%' },
                        { sWidth: '32%' },
                        { sWidth: '32%' },
                        { sWidth: '4%' },
                    ],
                });

            } else if ($(this).hasClass('datatable-ppsa')) {
                $(this).DataTable({
                    paging: false,
                    searching: false,
                    info: false,
                    fixedHeader: true,
                    // scrollY: '288px',
                    scrollCollapse: true,
                    order: [
                        [0, 'desc'],
                        [1, 'desc'], 
                        [2, 'desc'],                      
                        [3, 'desc'],                      
                        [4, 'desc'],                      
                        [5, 'desc'],                      
                        [6, 'desc'],                      
                        [7, 'desc'],                      
                        [8, 'desc'],                      
                        [9, 'desc'],                      
                        [10, 'desc'],                      
                        [11, 'desc'],                      
                        [12, 'desc'],                      
                        // [13, 'desc'],                      
                    ],

                    columnDefs: [
                        { orderable: false, targets: [12], className: 'text-right' },
                    ],
                    bAutoWidth: false,
                    aoColumns: [
                        { sWidth: '10%' },
                        { sWidth: '7%' },
                        { sWidth: '7%' },
                        { sWidth: '7%' },
                        { sWidth: '7%' },
                        { sWidth: '7%' },
                        { sWidth: '7%' },
                        { sWidth: '7%' },
                        { sWidth: '7%' },
                        { sWidth: '7%' },
                        { sWidth: '7%' },
                        { sWidth: '7%' },
                        { sWidth: '12%' },
                    ],
                });

            } else if ($(this).hasClass('remm-dealership')) {
                $(this).DataTable({
                    paging: false,
                    searching: false,
                    info: false,
                    fixedHeader: true,
                    scrollY: '550px',
                    scrollCollapse: true,
                    order: [
                        [0, 'desc'],
                        [1, 'asc'],
                        [2, 'desc'],
                        [3, 'desc'],
                    ],
                    // bAutoWidth: false,
                    columnDefs: [
                        { orderable: true, targets: [1], className: 'text-left' },
                    ],
                    aoColumns: [
                        { sWidth: '28%' },
                        { sWidth: '28%' },
                        { sWidth: '28%' },
                        { sWidth: '' },
                    ],
                });
            } else if ($(this).hasClass('dynamic-height')) {
                
                let dynamicHeight;
                const sectionTitle = $(this).hasClass('has-section-title');
                function setTableBodyHeight() {
                    const wrapperHeight = $('.dynamic-height').closest('.wrapper').outerHeight();
                    dynamicHeight = wrapperHeight - 70;
                    if(sectionTitle) {
                        const sectionTitleHeight = $('.dynamic-height').closest('.wrapper').find('.section-title').outerHeight();
                        dynamicHeight -= sectionTitleHeight;
                    }
                    initDatatable(dynamicHeight);
                }
                $(this).find('tbody tr').each(function(){
                    let isExpanded = false;
                    $(this).on('click', function(){
                        const target = $(this).find('.expandable-div');
                        const arrow = $(this).find('.arrow');
                        if(target.length) {
                            const innerHeight = target.find('.div-body').outerHeight();
                            arrow.toggleClass('active');
                            if(!isExpanded) {
                                target.animate({
                                    height: innerHeight
                                });
                                isExpanded = true;
                            } else {
                                target.animate({
                                    height: 20
                                });
                                isExpanded = false;
                            }
                        }
                    });
                })
                function initDatatable(dynamicHeight) {
                    $('.datatable.dynamic-height').DataTable().destroy();
                    $('.datatable.dynamic-height').DataTable({
                        paging: false,
                        searching: false,
                        info: false,
                        fixedHeader: true,
                        scrollY: dynamicHeight + 'px',
                        scrollCollapse: true,
                        order: [
                            [0, 'desc'],
                            [1, 'desc'],
                            [2, 'desc'],
                            [3, 'desc'],
                            [4, 'desc'],
                            [5, 'desc'],
                            [6, 'desc'],
                        ],
                        // bAutoWidth: false,
                        // columnDefs: [
                        //     { orderable: true, targets: [1], className: 'text-left' },
                        // ],
                        aoColumns: [
                            { sWidth: '15%' },
                            { sWidth: '15%' },
                            { sWidth: '20%' },
                            { sWidth: '15%' },
                            { sWidth: '15%' },
                            { sWidth: '15%' },
                            { sWidth: '5%' },
                        ],
                    });
                }
                initDatatable();
                setTableBodyHeight();
                $(window).resize(function(){
                    setTableBodyHeight();
                });

            } else {
                $(this).DataTable({
                    paging: false,
                    searching: false,
                    info: false,
                    fixedHeader: true,
                    scrollY: '288px',
                    scrollCollapse: true,
                    order: [
                        [0, 'desc'],
                        [1, 'desc'],
                        [2, 'desc'],
                        [3, 'desc'],
                        [4, 'desc'],
                        [5, 'desc'],
                    ],
                    // bAutoWidth: false,
                    aoColumns: [
                        { sWidth: '10%' },
                        { sWidth: '28%' },
                        { sWidth: '10%' },
                        { sWidth: '26%' },
                        { sWidth: '18%' },
                        { sWidth: '' },
                    ],
                });
            }
        });
    }
    

    // Custom Select
    $('.select-dropdown:not(.actions) .dropdown-item').on('click', function(e) {
        e.preventDefault();
        const value = $(this).text();
        $(this).closest('.select-dropdown').find('.dropdown-toggle').text(value);
    });

    // Color Gauge Text
    function colorGaugeValue() {
        const el = $('.highcharts-data-labels.highcharts-gauge-series span');
        const elValue = parseInt(el.text(), 10);
        if (elValue > 50) {
            el.addClass('green');
            el.text(`${elValue} - Good`);
        }
    }
    colorGaugeValue();
    $(window).resize(function() {
        colorGaugeValue();
        setTimeout(() => {
            colorGaugeValue();
        }, 500);
    });

    // Products Slider
    if ($('.products-carousel').length) {
        $('.products-carousel').slick({
            dots: true,
            infinite: false,
            speed: 300,
            arrows: false,
            slidesToShow: 7,
            slidesToScroll: 7,
        });
    }
    if ($('.one-slide').length) {
        $('.one-slide').slick({
            dots: true,
            infinite: false,
            speed: 300,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    }
    $('.editable').each(function() {
        $(this)
            .parent()
            .on('click', function() {
                $('.editable').parent().removeClass('filled');
                $(this).addClass('filled');
            });
        // var elem = $(this);

        // elem.data('oldVal', elem.val());

        // elem.bind('propertychange change click keyup input paste', function (
        //   event
        // ) {
        //   if (elem.data('oldVal') != elem.val()) {
        //     elem.data('oldVal', elem.val());
        //     $(this).parent().addClass('filled');
        //   }
        // });
    });

    // Count Typed Characters
    $('.textarea textarea').on('input', function() {
        const count = $(this).val().length;
        $(this).closest('.textarea').find('.typed').text(count);
    });

    // Table Checkboxes
    $('.table .custom-checkbox .custom-control-input').each(function() {
        $(this).on('change', function() {
            const id = $(this).attr('id');
            const checked = $(this).prop('checked');
            if (id === 'select-all') {
                if (checked) {
                    $(this)
                        .closest('.table')
                        .find('.custom-checkbox .custom-control-input')
                        .prop('checked', true);
                } else {
                    $(this)
                        .closest('.table')
                        .find('.custom-checkbox .custom-control-input')
                        .prop('checked', false);
                }
            }
        });
    });

    // Show Password
    $('.show-password .icon-eye').on('click', function() {
        const el = $(this);
        const inputType = el.closest('.show-password').find('input').attr('type');
        const newAttr = inputType === 'password' ? 'text' : 'password';
        el.closest('.show-password').find('input').attr('type', newAttr);
        if (newAttr === 'password') {
            $(this).removeClass('icon-eye-lined').addClass('icon-eye');
        } else {
            $(this).removeClass('icon-eye').addClass('icon-eye-lined');
        }
    });

    // Sidemenu
    $('.open-sidemenu').on('click', function(e) {
        e.preventDefault();
        $('.sidemenu').addClass('active');
    });

    $('.close-menu').on('click', function() {
        $('.sidemenu').removeClass('active');
    });


    // Manual Taxes
    $('.adjust-taxes-btn').each(function() {
        $(this).on('click', function() {
            $(this).toggleClass('filled');
            $(this).closest('.field').find('.custom-rate').toggleClass('active');
        });
    });

    // Worksheet Slide Panel
    $('.panel-toggle').on('click', function() {
        $('.worksheet-slide-panel').toggleClass('expanded');
        setInterval(() => {
            $('.one-slide').each(function() {
                $(this).slick('setPosition');
            });
        }, 300);
    });

    // Deals
    let selectedId = null;
    $('.deals input[type="checkbox"]').each(function() {
        $(this).on('click', function() {
            const id = $(this).attr("id");
            if (id === selectedId) {

                selectedId = null;
                removePanelClasses();
                $('.worksheet-slide-panel')
                    .find('> div .block-header')
                    .addClass('grey-border');
                $('.worksheet-slide-panel')
                    .find('.card')
                    .addClass('grey-card');
                setTimeout(() => {
                    $('.deals input[type="checkbox"]').prop('checked', false);
                }, 100);
                return false;
            }

            $(this).on('change', function() {
                const id = $(this).attr("id");
                const color = $(this).data('color');
                $('.deals input[type="checkbox"]').prop('checked', false);
                $(this).prop('checked', true);
                selectedId = id;

                // Reset Classes
                removePanelClasses();

                // Adding the color
                $('.worksheet-slide-panel').removeClass('inactive');
                $(this).closest('.block').addClass(`highlight-${color}`);
                $('.worksheet-slide-panel')
                    .find('> div .block-header')
                    .removeClass('grey-border')
                    .addClass(`filled ${color}-header`);
                $('.worksheet-slide-panel')
                    .find('.card')
                    .removeClass('grey-card')
                    .addClass(`${color}-card`);
                $('.worksheet-slide-panel')
                    .find('.one-slide')
                    .addClass(`carousel-${color}`);
            });
        });
    });

    function removePanelClasses() {
        $('.deals input[type="checkbox"]')
            .closest('.block')
            .removeClass('highlight-red')
            .removeClass('highlight-dark-grey')
            .removeClass('highlight-blue');
        $('.worksheet-slide-panel').addClass('inactive');
        $('.worksheet-slide-panel')
            .find('> div .block-header')
            .removeClass('red-header')
            .removeClass('dark-grey-header')
            .removeClass('blue-header')
            .removeClass('filled');
        $('.worksheet-slide-panel')
            .find('.card')
            .removeClass('red-card')
            .removeClass('dark-grey-card')
            .removeClass('blue-card');

        $('.worksheet-slide-panel')
            .find('.one-slide')
            .removeClass('carousel-red')
            .removeClass('carousel-dark-grey')
            .removeClass('carousel-blue');
    }

    // Adding Interest Field
    $('.add-interest').each(function() {
        const field = '<input type="text" class="form-control small" />';
        $(this).on('click', function() {
            const fieldsNo = $(this).closest('.field').find('.grid-blocks').children()
                .length;
            if (fieldsNo < 6) {
                $(this).closest('.field').find('.grid-blocks').append(field);
            }
        });
    });

    $('.video-call .controls .btn').each(function() {
        $(this).on('click', function() {
            if ($(this).hasClass('enable-video')) {
                $(this).removeClass('enable-video').addClass('disable-video');
                $(this)
                    .find('i')
                    .removeClass('icon-videocam')
                    .addClass('icon-video-off');
            } else if ($(this).hasClass('disable-video')) {
                $(this).addClass('enable-video').removeClass('disable-video');
                $(this)
                    .find('i')
                    .addClass('icon-videocam')
                    .removeClass('icon-video-off');
            } else if ($(this).hasClass('enable-audio')) {
                $(this).removeClass('enable-audio').addClass('disable-audio');
                $(this).find('i').removeClass('icon-mic').addClass('icon-mic-off');
            } else if ($(this).hasClass('disable-audio')) {
                $(this).addClass('enable-audio').removeClass('disable-audio');
                $(this).find('i').addClass('icon-mic').removeClass('icon-mic-off');
            }
        });
    });

    // Modal Button Group
    $('.modal-header .btn-group .btn').on('click', function() {
        const color = $(this).data('color');
        const parent = $(this).closest('.modal-dialog');
        $('.modal-header .btn-group .btn').removeClass('active');
        $(this).addClass('active');
        parent
            .removeClass('blue-modal')
            .removeClass('red-modal')
            .addClass(`${color}-modal`);
        parent
            .find('.table')
            .removeClass('blue-table')
            .removeClass('red-table')
            .addClass(`${color}-table`);
    });

    // $(".datepicker").datepicker({
    //   changeMonth: true,
    //   changeYear: true,
    //   dateFormat: 'yy/dd/mm',
    //   beforeShow: function (input, inst) {
    //       var rect = input.getBoundingClientRect();
    //       setTimeout(function () {
    //         inst.dpDiv.css({ top: rect.top + 100, left: rect.left + 0 });
    //       }, 0);
    //   }
    // });

    // Loan Details
    $(".payment-options a.dropdown-item").click(function() {
        $("p.payment-value").empty();
        baudrate = $(this).text();
        $("p.payment-value").append(baudrate);
    });
    $(".amortization-options a.dropdown-item").click(function() {
        $("p.amortization-value").empty();
        baudrate = $(this).text();
        $("p.amortization-value").append(baudrate);
    });
    $(".term-options a.dropdown-item").click(function() {
        $("p.term-value").empty();
        baudrate = $(this).text();
        $("p.term-value").append(baudrate);
    });

    function setContentHeight() {
        const windowHeight = $(window).outerHeight();
        const header = $('header').outerHeight();
        const metaBar = $('.meta-bar').outerHeight();
        const navBar = $('.nav-tabs').outerHeight();
        const navBarDark = $('.nav-tabs.dark').outerHeight();
        const buttons = $('.global-wrapper>.buttons').outerHeight();
        const verify = $('.verify.wrapper.light-grey.auto-height.p-4').outerHeight();
        const leftDiv = $('.global-wrapper.op-page .col-xl-6:first-child .wrapper.light-grey').outerHeight();
        const leftDivSA = $('.global-wrapper.dark-page .col-xl-6:first-child .wrapper.light-grey').outerHeight();
        const leftDivFixed = "683px";
        $('.global-wrapper>.container-fluid>.tab-content').css({
            minHeight: windowHeight - (header + metaBar + 84),
        });
        // For CD_Brochures
        $('.global-wrapper>.container-fluid>.tab-content.full-height-max .custom-scroll').css({
            maxHeight: windowHeight - (header + metaBar + navBar + navBarDark + 101),
            height: "685px",
            minHeight: "685px",
        });
        // For SA_Brochures
        $('.global-wrapper>.container-fluid .tab-content.full-height-max .custom-scroll').css({
            maxHeight: windowHeight - (header + metaBar + navBar + navBarDark + buttons + 39),
            height: "685px",
            minHeight: "685px",
        });
        $('.grid-blocks.three.gap-15.products-full-height').css({
            // height: windowHeight - (header + metaBar + navBar + 30 + 5 + navBarDark + 30 + 30 + 6),
            // minHeight: windowHeight - (header + metaBar + navBar + 30 + 5 + navBarDark + 30 + 30 + 6),
            // minHeight: windowHeight - (header + metaBar + 84),
            height: leftDiv - (30 + 30),
            minHeight: leftDiv - (30 + 30),
        });
        $('.grid-blocks.three.gap-15.products-full-height').css({
            height: leftDivFixed,
            minHeight: leftDivFixed,
            // minHeight: windowHeight - (header + metaBar + buttons) + 9,
        });
        $('.global-wrapper>.container-fluid>.tab-content>#worksheet>.fixed-scroll').css({
            maxHeight: windowHeight - (header + metaBar + navBar + 46 + 15 + 48),
        });
        $('.global-wrapper>.container-fluid>.tab-content>.full-height').css({
            height: windowHeight - (header + metaBar + 84),
        });
        // For SA_Tab1_None_Copy_4
        $('.global-wrapper .grid-blocks.two.full-height-max').css({
            minHeight: windowHeight - (header + metaBar + verify + 83),
        });
        // For 
        $('.remmitance_dealership.full-height-max').css({
            maxHeight: windowHeight - (header + 166 + 34 + 100),
        });
    }
    setContentHeight();
    $(window).resize(function() {
        setContentHeight();
    });

});

function toggleFullScreen() {
    /* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } 
    else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
    // else if (document.documentElement.webkitRequestFullScreen) {
    //   return document.documentElement.webkitRequestFullScreen();
    // }

  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

$(document).ready(function (){
    var table = $('#onlineStatus').DataTable({
    paging: false,
    searching: false,
    info: false,
    fixedHeader: true,
    // scrollY: '288px',
    scrollCollapse: true,

    'columnDefs': [{
        'targets': 0,
        'searchable': false,
        'orderable': false,
        'className': 'dt-body-center',
        'render': function (data, type, full, meta){
            return '<input type="checkbox" name="id[]" value="' + $('<div/>').text(data).html() + '">';
        }
    }],
    // 'order': [[1, 'asc']],

    order: [
        [0, ''],
        [1, 'desc'],
        [2, 'desc'],
        [3, 'desc'],
        [4, 'desc'],
        [5, 'desc'],
    ],
    // columnDefs: [
    //     { 
    //         orderable: false, 
    //         targets: 0,
    //         className: "select-checkbox",
    //     },
    // ],
    select: {
        style: "os",
        selector: "td:first-child",
      },
    // bAutoWidth: false,
    aoColumns: [
        { sWidth: '5%' },
        { sWidth: '20%' },
        { sWidth: '20%' },
        { sWidth: '20%' },
        { sWidth: '20%' },
        { sWidth: '15%' },
    ],

    });
 
    // Handle click on "Select all" control
    $('#onlineStatus-select-all').on('click', function(){
       // Get all rows with search applied
       var rows = table.rows({ 'search': 'applied' }).nodes();
       // Check/uncheck checkboxes for all rows in the table
       $('input[type="checkbox"]', rows).prop('checked', this.checked);
    });
 
    // Handle click on checkbox to set state of "Select all" control
    $('#onlineStatus tbody').on('change', 'input[type="checkbox"]', function(){
       // If checkbox is not checked
       if(!this.checked){
          var el = $('#onlineStatus-select-all').get(0);
          // If "Select all" control is checked and has 'indeterminate' property
          if(el && el.checked && ('indeterminate' in el)){
             // Set visual state of "Select all" control
             // as 'indeterminate'
             el.indeterminate = true;
          }
       }
    });
 
    // Handle form submission event
    $('#frm-onlineStatus').on('submit', function(e){
       var form = this;
 
       // Iterate over all checkboxes in the table
       table.$('input[type="checkbox"]').each(function(){
          // If checkbox doesn't exist in DOM
          if(!$.contains(document, this)){
             // If checkbox is checked
             if(this.checked){
                // Create a hidden element
                $(form).append(
                   $('<input>')
                      .attr('type', 'hidden')
                      .attr('name', this.name)
                      .val(this.value)
                );
             }
          }
       });
    });


    $('.dropdownActiveInactive').parent().find('.dropdown-menu a').click(function () {
        if ($(this).text().toLowerCase() == 'inactive') {
            $(this).parent().parent().find('.dropdownActiveInactive').removeClass('dark-green');
            $(this).parent().parent().find('.dropdownActiveInactive').removeClass('red');

            $(this).parent().parent().find('.dropdownActiveInactive').addClass('red');
        }
        else if ($(this).text().toLowerCase() == 'active') {
            $(this).parent().parent().find('.dropdownActiveInactive').removeClass('dark-green');
            $(this).parent().parent().find('.dropdownActiveInactive').removeClass('red');

            $(this).parent().parent().find('.dropdownActiveInactive').addClass('dark-green');
        }
        else if ($(this).text().toLowerCase() == 'not paid') {
            $(this).parent().parent().find('.dropdownActiveInactive').removeClass('dark-green');
            $(this).parent().parent().find('.dropdownActiveInactive').removeClass('red');

            $(this).parent().parent().find('.dropdownActiveInactive').addClass('red');
        }
        else if ($(this).text().toLowerCase() == 'paid') {
            $(this).parent().parent().find('.dropdownActiveInactive').removeClass('dark-green');
            $(this).parent().parent().find('.dropdownActiveInactive').removeClass('red');

            $(this).parent().parent().find('.dropdownActiveInactive').addClass('dark-green');
        }
    });

 });