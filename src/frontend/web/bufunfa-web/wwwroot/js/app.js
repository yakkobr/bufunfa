﻿// Métodos comuns utilizados pela aplicação
var App = function () {
    return {
        corrigirPathRota: function (rota) {
            return rota;
        },

        // Realiza o bloqueio da página ou de um elemento, exibindo a mensagem "Processando..."
        bloquear: function (selector) {
            if (selector != null) {
                $(selector).unblock();
                $(selector).block({
                    overlayCSS: {
                        backgroundColor: '#000000',
                        opacity: 0.05
                    },
                    css: {
                        top: '45%',
                        left: '35%',
                        border: '0',
                        padding: '0',
                        backgroundColor: 'none'
                    },
                    message: '<div id="loading"><img src="/img/loading.svg"><br/>Processando...</div>',
                    baseZ: 99999999999999999,
                    centerX: true,
                    centerY: true
                });
            }
            else {
                $.unblockUI();
                $.blockUI({
                    overlayCSS: {
                        backgroundColor: '#000000',
                        opacity: 0.05
                    },
                    css: {
                        top: '45%',
                        left: '35%',
                        border: '0',
                        padding: '0',
                        backgroundColor: 'none'
                    },
                    centerX: true,
                    centerY: true,
                    message: '<div id="loading"><img src="/img/loading.svg"><br/>Processando...</div>',
                    baseZ: 99999999999999999
                });
            }
        },

        // Desbloqueia a página ou um elemento específico
        desbloquear: function (selector) {
            if (selector != null) {
                $(selector).unblock();
            }
            else {
                $.unblockUI();
            }
        },
    };
}();

if (jQuery().dataTable) {
    $.extend($.fn.dataTable.defaults, {
        dom: "<'row'<'col-xs-12 col-sm-6 mb-xs'l><'col-xs-12 col-sm-6 mb-xs'f>><'table-responsive't><'row'<'col-xs-12 col-sm-6'i><'col-xs-12 col-sm-6'p>>",
        autoWidth: true,
        lengthMenu: [[25, 50, 100, 150], [25, 50, 100, 150]],
        pagingType: "full_numbers",
        language: {
            search: "",
            lengthMenu: "_MENU_ registros por página",
            info: "Exibindo _START_ de _END_ do total de _TOTAL_ registros",
            paginate: {
                first: '<i class="la la-angle-double-left"></i>',
                next: '<i class="la la-angle-right"></i>',
                previous: '<i class="la la-angle-left"></i>',
                last: '<i class="la la-angle-double-right"></i>',
                zeroRecords: "Nenhum registro encontrado."
            },
            //infoFiltered: "(filtrado a partir do total de _MAX_ registros)",
            emptyTable: "Nenhum registro encontrado.",
            zeroRecords: "Nenhum registro encontrado."
        }
    });
}

/*! jQuery Validation Plugin - v1.19.0 - 11/28/2018
 * https://jqueryvalidation.org/
 * Copyright (c) 2018 Jörn Zaefferer; Licensed MIT */
!function (a) { "function" == typeof define && define.amd ? define(["jquery", "./jquery.validate.min"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery) }(function (a) { return a.extend(a.validator.messages, { required: "Este campo &eacute; obrigat&oacute;rio.", remote: "Por favor, corrija este campo.", email: "Por favor, forne&ccedil;a um endere&ccedil;o de email v&aacute;lido.", url: "Por favor, forne&ccedil;a uma URL v&aacute;lida.", date: "Por favor, forne&ccedil;a uma data v&aacute;lida.", dateISO: "Por favor, forne&ccedil;a uma data v&aacute;lida (ISO).", number: "Por favor, forne&ccedil;a um n&uacute;mero v&aacute;lido.", digits: "Por favor, forne&ccedil;a somente d&iacute;gitos.", creditcard: "Por favor, forne&ccedil;a um cart&atilde;o de cr&eacute;dito v&aacute;lido.", equalTo: "Por favor, forne&ccedil;a o mesmo valor novamente.", maxlength: a.validator.format("Por favor, forne&ccedil;a n&atilde;o mais que {0} caracteres."), minlength: a.validator.format("Por favor, forne&ccedil;a ao menos {0} caracteres."), rangelength: a.validator.format("Por favor, forne&ccedil;a um valor entre {0} e {1} caracteres de comprimento."), range: a.validator.format("Por favor, forne&ccedil;a um valor entre {0} e {1}."), max: a.validator.format("Por favor, forne&ccedil;a um valor menor ou igual a {0}."), min: a.validator.format("Por favor, forne&ccedil;a um valor maior ou igual a {0}."), step: a.validator.format("Por favor, forne&ccedil;a um valor m&uacute;ltiplo de {0}."), maxWords: a.validator.format("Por favor, forne&ccedil;a com {0} palavras ou menos."), minWords: a.validator.format("Por favor, forne&ccedil;a pelo menos {0} palavras."), rangeWords: a.validator.format("Por favor, forne&ccedil;a entre {0} e {1} palavras."), accept: "Por favor, forne&ccedil;a um tipo v&aacute;lido.", alphanumeric: "Por favor, forne&ccedil;a somente com letras, n&uacute;meros e sublinhados.", bankaccountNL: "Por favor, forne&ccedil;a com um n&uacute;mero de conta banc&aacute;ria v&aacute;lida.", bankorgiroaccountNL: "Por favor, forne&ccedil;a um banco v&aacute;lido ou n&uacute;mero de conta.", bic: "Por favor, forne&ccedil;a um c&oacute;digo BIC v&aacute;lido.", cifES: "Por favor, forne&ccedil;a um c&oacute;digo CIF v&aacute;lido.", creditcardtypes: "Por favor, forne&ccedil;a um n&uacute;mero de cart&atilde;o de cr&eacute;dito v&aacute;lido.", currency: "Por favor, forne&ccedil;a uma moeda v&aacute;lida.", dateFA: "Por favor, forne&ccedil;a uma data correta.", dateITA: "Por favor, forne&ccedil;a uma data correta.", dateNL: "Por favor, forne&ccedil;a uma data correta.", extension: "Por favor, forne&ccedil;a um valor com uma extens&atilde;o v&aacute;lida.", giroaccountNL: "Por favor, forne&ccedil;a um n&uacute;mero de conta corrente v&aacute;lido.", iban: "Por favor, forne&ccedil;a um c&oacute;digo IBAN v&aacute;lido.", integer: "Por favor, forne&ccedil;a um n&uacute;mero n&atilde;o decimal.", ipv4: "Por favor, forne&ccedil;a um IPv4 v&aacute;lido.", ipv6: "Por favor, forne&ccedil;a um IPv6 v&aacute;lido.", lettersonly: "Por favor, forne&ccedil;a apenas com letras.", letterswithbasicpunc: "Por favor, forne&ccedil;a apenas letras ou pontua&ccedil;ões.", mobileNL: "Por favor, fornece&ccedil;a um n&uacute;mero v&aacute;lido de telefone.", mobileUK: "Por favor, fornece&ccedil;a um n&uacute;mero v&aacute;lido de telefone.", nieES: "Por favor, forne&ccedil;a um NIE v&aacute;lido.", nifES: "Por favor, forne&ccedil;a um NIF v&aacute;lido.", nowhitespace: "Por favor, n&atilde;o utilize espa&ccedil;os em branco.", pattern: "O formato fornecido &eacute; inv&aacute;lido.", phoneNL: "Por favor, forne&ccedil;a um n&uacute;mero de telefone v&aacute;lido.", phoneUK: "Por favor, forne&ccedil;a um n&uacute;mero de telefone v&aacute;lido.", phoneUS: "Por favor, forne&ccedil;a um n&uacute;mero de telefone v&aacute;lido.", phonesUK: "Por favor, forne&ccedil;a um n&uacute;mero de telefone v&aacute;lido.", postalCodeCA: "Por favor, forne&ccedil;a um n&uacute;mero de c&oacute;digo postal v&aacute;lido.", postalcodeIT: "Por favor, forne&ccedil;a um n&uacute;mero de c&oacute;digo postal v&aacute;lido.", postalcodeNL: "Por favor, forne&ccedil;a um n&uacute;mero de c&oacute;digo postal v&aacute;lido.", postcodeUK: "Por favor, forne&ccedil;a um n&uacute;mero de c&oacute;digo postal v&aacute;lido.", postalcodeBR: "Por favor, forne&ccedil;a um CEP v&aacute;lido.", require_from_group: a.validator.format("Por favor, forne&ccedil;a pelo menos {0} destes campos."), skip_or_fill_minimum: a.validator.format("Por favor, optar entre ignorar esses campos ou preencher pelo menos {0} deles."), stateUS: "Por favor, forne&ccedil;a um estado v&aacute;lido.", strippedminlength: a.validator.format("Por favor, forne&ccedil;a pelo menos {0} caracteres."), time: "Por favor, forne&ccedil;a um hor&aacute;rio v&aacute;lido, no intervado de 00:00 a 23:59.", time12h: "Por favor, forne&ccedil;a um hor&aacute;rio v&aacute;lido, no intervado de 01:00 a 12:59 am/pm.", url2: "Por favor, forne&ccedil;a uma URL v&aacute;lida.", vinUS: "O n&uacute;mero de identifica&ccedil;&atilde;o de ve&iacute;culo informado (VIN) &eacute; inv&aacute;lido.", zipcodeUS: "Por favor, forne&ccedil;a um c&oacute;digo postal americano v&aacute;lido.", ziprange: "O c&oacute;digo postal deve estar entre 902xx-xxxx e 905xx-xxxx", cpfBR: "Por favor, forne&ccedil;a um CPF v&aacute;lido.", nisBR: "Por favor, forne&ccedil;a um NIS/PIS v&aacute;lido", cnhBR: "Por favor, forne&ccedil;a um CNH v&aacute;lido.", cnpjBR: "Por favor, forne&ccedil;a um CNPJ v&aacute;lido." }), a });