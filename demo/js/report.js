$(function(){
    $(window).load(function(){
        $('input[type=checkbox]').on('click',function(){
            $(this).attr('checked',true).siblings().attr('checked',false);
        });
        
        var tcnWarpH = $('#tcnWarp').height(),
            tcnH = 147,
            phyWarpH = $('#phyWarp').height(),
            phyItemH = $('#phyItem').height(),
            infH = 42;
        // $('#art2_div2>div').css('height',tcnWarpH + 'px');
        if(infH < phyItemH){
            $('#inf').css({'height':phyItemH+'px','paddingTop':(phyItemH-infH)/2+'px','borderBottom':'1px solid #000'});
        }
        if(tcnH < tcnWarpH){
            $('#tcn').css({'height':tcnWarpH+'px','paddingTop':(tcnWarpH-tcnH)/2+'px'});
            if(phyWarpH<=0)
                $('#tcnItem>div:nth-last-child(1)').css('borderBottom','0px');
            else{
                $('#phyItem>div:nth-last-child(1)').css('borderBottom','0px');
                $('#inf').css('borderBottom','0px');
            }
            $('#art2_div2 .right>div:nth-last-child(1)').css('borderBottom','0px');
        }

        // 出量
        var outWarpH = $('#outputWarp').height(),
            outH = 42;
        $('#art2_div3').css({'height': outWarpH + 2 + 'px'});
        if(outWarpH > outH){
            $('#output').css({'height':outWarpH + 'px', 'paddingTop': (outWarpH - outH) / 2 + 'px'});
            $('#outputWarp div:nth-last-child(1)').css('borderBottom','0px');
            $('#art2_div3 .rightWarp').css('height',outWarpH + 'px');
            $('#art2_div3 .middleWarp div:nth-last-child(1)').css('borderBottom','0px');
            $('#art2_div3 .rightWarp div:nth-last-child(1)').css('borderBottom','0px');
        }else{
            $('#art2_div3 .rightWarp').css('height',outH + 'px');
        }

        // 术中监测
        var art2_div4H = $('#art2_div4').height(),
            art2_div4_rightH = $('#art2_div4 .rightWarp').height();
        $('#art2_div4>div').css('height',art2_div4H + 'px');
        $('#monitor').css({'height':art2_div4H + 'px','paddingTop':(art2_div4H - 84) / 2 + 'px'});
        if(art2_div4_rightH >= art2_div4H){
            $('#art2_div4 .rightWarp div:nth-last-child(1)').css({'borderBottom':'0px'});
        }

        var art3H = $('#rep_art3').height(),
            psH = 42;
        if(art3H > psH){
            $('#ps').css('paddingTop',(art3H - psH) / 2 + 'px');
            $('#rep_art3 div').css({'height':art3H + 'px'});
        }

        // 第一个canvas
        var chart1 = new lineChart(),
            option1 = {
                // canvas头部位置，用来显示日期
                timeCtr: 'timeTit',
                cols: 45,
                rows: $('#tcnItem div').length + $('#phyItem div').length + 1,
                interval: 1000,
                series:[{
                    'xAxis': new Date().Format('yyyy-MM-dd hh:mm:ss'),
                    'yAxis': [{
                        name: '盐酸氨溴索口服液',
                        data: 360
                    },{
                        name: '克霉唑阴道片',
                        data: 340
                    }]
                },{
                    'xAxis': new Date(new Date().valueOf() + (10*1000)).Format('yyyy-MM-dd hh:mm:ss'),
                    'yAxis': [{
                        name: '盐酸氨溴索口服液',
                        data: 360
                    },{
                        name: '克霉唑阴道片',
                        data: 340,
                        point: false
                    }]
                },{
                    'xAxis': new Date(new Date().valueOf() + (30*1000)).Format('yyyy-MM-dd hh:mm:ss'),
                    'yAxis': [{
                        name: '克霉唑阴道片',
                        data: 340
                    }]
                }]
            };
        chart1.setData('can1',option1);

        // 第二个canvas
        var chart2 = new lineChart(),
            option2 = {
                // canvas头部位置，用来显示日期
                timeCtr: 'timeTit',
                cols: 45,
                rows: $('#outputWarp div').length,
                interval: 1000,
                showVLine: false,
                series:[{
                    'xAxis': new Date(new Date().valueOf() + (10*1000)).Format('yyyy-MM-dd hh:mm:ss'),
                    'yAxis': [{
                        name: '盐酸氨溴索口服液',
                        data: 10
                    }]
                },{
                    'xAxis': new Date(new Date().valueOf() + (30*1000)).Format('yyyy-MM-dd hh:mm:ss'),
                    'yAxis': [{
                        name: '盐酸氨溴索口服液',
                        data: 10
                    }]
                }]
            };
        chart2.setData('can2',option2);

        // 第三个canvas
        var chart3 = new lineChart(),
            option3 = {
                // canvas头部位置，用来显示日期
                timeCtr: 'timeTit',
                cols: 22,
                rows: $('#oxy div').length,
                interval: 1000,
                series:[{
                    'xAxis': new Date(new Date().valueOf() + (10*1000)).Format('yyyy-MM-dd hh:mm:ss'),
                    'yAxis': [{
                        name: '盐酸氨溴索口服液',
                        // data: 10
                    }]
                },{
                    'xAxis': new Date(new Date().valueOf() + (30*1000)).Format('yyyy-MM-dd hh:mm:ss'),
                    'yAxis': [{
                        name: '盐酸氨溴索口服液',
                        // data: 10
                    }]
                }]
            };
        chart3.setData('can3',option3);

        // 第四个canvas
        var chart4 = new lineChart(),
            curDate = new Date(),
            option4 = {
                timeCtr: 'timeTit',
                cols: 45,
                rows: 16,
                interval: 1000,
                series:[]
            };
            // {
            //         'xAxis': curDate.Format('yyyy-MM-dd hh:mm:ss'),
            //         'yAxis': [{
            //             name: '血压',
            //             data: parseInt(Math.random() * 40)
            //         }]
            //     },{
            //         'xAxis': new Date(curDate.getTime() + 1 * 1000).Format('yyyy-MM-dd hh:mm:ss'),
            //         'yAxis': [{
            //             name: '血压',
            //             data: parseInt(Math.random() * 40)
            //         }]
            //     },{
            //         'xAxis': new Date(curDate.getTime() + 2 * 1000).Format('yyyy-MM-dd hh:mm:ss'),
            //         'yAxis': [{
            //             name: '血压',
            //             data: parseInt(Math.random() * 40)
            //         }]
            //     }
        // var socket = io.connect('http://192.168.5.5:80',{'connect timeout':5000});
        // socket.on('time', function(mytime) {
        //     option4.series.push(mytime);
            // chart4.setData('can4',option4);
        // });

        setInterval(function(){
            var opt = {
                'xAxis': new Date().Format('yyyy-MM-dd hh:mm:ss'),
                'yAxis': [{
                    name: '血压',
                    data: parseInt(Math.random() * 40)
                },{
                    name: '脉博',
                    data: parseInt(Math.random() * 40 + 40)
                },{
                    name: '呼吸',
                    data: parseInt(Math.random() * 40 + 80)
                },{
                    name: '辅助呼吸',
                    data: parseInt(Math.random() * 40 + 120)
                },{
                    name: '控制呼吸',
                    data: parseInt(Math.random() * 40 + 160)
                },{
                    name: '体温',
                    data: parseInt(Math.random() * 40 + 200)
                },{
                    name: '潮气量',
                    data: parseInt(Math.random() * 40 + 240)
                },{
                    name: '插管',
                    data: parseInt(Math.random() * 40 + 280)
                }]
            }
            option4.series.push(opt);
            chart4.setData('can4',option4);
        },1000);
    });

    $('article input').on('dblclick',function(){
        if(this.type === 'checkbox') return;
        if($(this).prop('readonly') === true){
            $(this).prop('readonly',false);
        }
    }).on('blur',function(){
        if(this.type === 'checkbox') return;
        if($(this).prop('readonly') === false){
            $(this).prop('readonly',true);
        }
    });

    $('textarea').on('dblclick',function(){
        if($(this).prop('readonly') === true){
            $(this).prop('readonly',false);
        }
    }).on('blur',function(){
        if($(this).prop('readonly') === false){
            $(this).prop('readonly',true);
        }
    });

    $('.navbar-header li').on('click',function(){
        var strText = $.trim(this.children[0].innerText),
            strTit = '',
            strHtml = '...';
        if(strText === '麻醉开始'){
            $('#myModal .modal-body').attr('id','mzks');
            $('#myModal .modal-body').html('<div><label class="timeTit">麻醉开始时间：</label><input type="time" class="time"></div>');
        }else if(strText === '手术开始'){
            $('#myModal .modal-body').attr('id','ssks');
            $('#myModal .modal-body').html('<div><label class="timeTit">手术开始时间：</label><input type="time" class="time"></div>');
        }else if(strText === '手术结束'){
            $('#myModal .modal-body').attr('id','ssjs');
            $('#myModal .modal-body').html('<div><label class="timeTit">手术结束时间：</label><input type="time" class="time"></div>');
        }else if(strText === '麻醉结束'){
            $('#myModal .modal-body').attr('id','mzjs');
            $('#myModal .modal-body').html('<div><label class="timeTit">麻醉结束时间：</label><input type="time" class="time"></div>');
        }else if(strText === '病人信息'){
            $('#myModal .modal-body').attr('id','brxx');
            $('#myModal .modal-body').load('../brxx.html #content>div');
        }else if(strText === '用药记录'){
            $('#myModal .modal-body').attr('id','yyjl');
            $('#myModal .modal-body').load('../yyjl.html #content>div',function(){
                $('#yyjl li').on('click',function(){
                    $('#ypWarp input[type=text]').val(this.innerText);
                    $('#sjWarp div').hide();
                });
                $('#yyjl .ypItems span').on('click',function(){
                    $('#ypWarp input[type=text]').val(this.innerText);
                    $('#sjWarp div').show();
                });
                $('.yp_detail .btnAdd').on('click',function(){
                    $('.ypItems').append('<span>'+$('#ypWarp input[type=text]').val()+'</span>');
                });
            });
        }else if(strText === '液体记录'){
            $('#myModal .modal-body').attr('id','ytjl');
            $('#myModal .modal-body').load('../ytjl.html #content>div',function(){
                $('#ytjl li').on('click',function(){
                    $('#ytWarp input').empty().val(this.innerText);
                    $('#rlWarp input').val('');
                    $('#djWarp input').val('');
                    $('#sjWarp div').hide();
                });
                $('#ytjl .ytItems span').on('click',function(){
                    $('#ytWarp input[type=text]').val(this.innerText);
                    $('#sjWarp div').show();
                });
                $('.yp_detail .btnAdd').on('click',function(){
                    $('.ytItems').append('<span>'+$('#ytWarp input[type=text]').val()+'</span>');
                });
                $('.ytItems tr').on('click',function(){
                    if($(this).index() <= 0)
                        return;
                    $('#ytWarp input').val(this.children[0].innerText);
                    $('#rlWarp input').val(this.children[1].innerText);
                    $('#djWarp input').val(this.children[2].innerText);
                });
            });
        }else if(strText === '检验事件'){
            $('#myModal .modal-body').attr('id','jysj');
            $('#myModal .modal-body').load('../jysj.html #content>div',function(){
                $('.jyItems input').on('dblclick',function(){
                    if(this.type === 'checkbox') return;
                    if($(this).prop('readonly') === true){
                        $(this).prop('readonly',false);
                    }
                }).on('blur',function(){
                    if(this.type === 'checkbox') return;
                    if($(this).prop('readonly') === false){
                        $(this).prop('readonly',true);
                    }
                });
            });
        }else if(strText === '事件记录'){
            $('#myModal .modal-body').attr('id','sjjl');
            $('#myModal .modal-body').load('../sjjl.html #content>div',function(){
                $('.jcWarp>div').on('click',function(){
                    var cor = $(this).css('border-color');
                    if(cor === 'rgb(243, 243, 243)')
                        $(this).css({'border-color':'#0066FF'});
                    else
                        $(this).css({'border-color':'#f3f3f3'});
                })
            });
        }else if(strText === '人员更换'){
            $('#myModal .modal-body').attr('id','rygh');
            $('#myModal .modal-body').load('../rygh.html #content>div',function(){
                $('.ry_detail .ryItmes span').on('click',function(){
                    var cor = $(this).css('border-color');
                    if(cor === 'rgb(243, 243, 243)')
                        $(this).css({'border-color':'#0066FF'});
                    else
                        $(this).css({'border-color':'#f3f3f3'});
                })
                $('.ry_detail .items li').on('click',function(){
                    var index = $(this).index();
                    $('.ry_detail .ryItmes div').eq(index).addClass('in').siblings().removeClass('in');
                });
                $('input[name=fenji]').on('click',function(){
                    $(this).attr('checked',true).siblings().attr('checked',false);
                });
            });
        }else if(strText === '安全检查' || strText === '复苏情况'){            
            $('#myModal .modal-body').attr('id','aqjc');
            $('#myModal .modal-body').load('../aqjc.html #content>div',function(){
                $('.tit img').on('click',function(){
                    var ctr = $(this).parent().next();
                    ctr.slideToggle();
                });
            });
        }else if(strText === '出手术间' || strText === '出复苏室'){
            $('#myModal .modal-body').attr('id','cssj');
            // $('#myModal .modal-body').load('../cssj.html #content>div');
            $('#myModal .modal-body').html('<div><label class="timeTit">出手术间时间：</label><input type="time" class="time"></div>');
        }
        $('#myModalLabel').get(0).innerText = strText;        
    });
});