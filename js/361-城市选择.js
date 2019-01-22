$(function () {
    var allCity=[
        ['北京','9240','0.08','0.02','0.002','0.12'],
        ['上海','8962','0.08','0.02','0.005','0.07'],
        ['广州','7409','0.08','0.02','0.002','0.05'],
        ['深圳','8315','0.08','0.02','0.002','0.05'],
        ['杭州','7330','0.08','0.02','0.005','0.12'],
        ['宁波','7152','0.08','0.02','0.005','0.08'],
        ['佛山','7017','0.08','0.015','0.002','0.05'],
        ['东莞','6998','0.08','0.005','0.002','0.05'],
        ['厦门','6886','0.08','0.02','0.005','0.12'],
        ['苏州','6719','0.08','0.02','0.005','0.08'],
        ['南京','6680','0.08','0.02','0.005','0.08'],
        ['重庆','6584','0.08','0.02','0.005','0.07'],
        ['贵阳','6437','0.08','0.02','0.003','0.06'],
        ['成都','6402','0.08','0.02','0.004','0.06'],
        ['武汉','6331','0.08','0.02','0.002','0.05'],
        ['南昌','6235','0.08','0.02','0.005','0.12'],
        ['南宁','6197','0.08','0.02','0.005','0.12'],
        ['昆明','6230','0.08','0.02','0.003','0.1'],
        ['郑州','6191','0.08','0.02','0.003','0.1'],
        ['长沙','6186','0.08','0.02','0.003','0.08'],
        ['天津','6178','0.08','0.02','0.005','0.11'],
        ['合肥','6173','0.08','0.02','0.005','0.08'],
        ['大连','6144','0.08','0.02','0.005','0.15'],
        ['济南','6067','0.08','0.02','0.003','0.07'],
        ['青岛','6057','0.08','0.02','0.005','0.05'],
        ['石家庄','5886','0.08','0.02','0.003','0.1'],
        ['西安','5872','0.08','0.02','0.003','0.05'],
        ['沈阳','5842','0.08','0.02','0.015','0.12'],
        ['太原','5841','0.08','0.02','0.003','0.06'],
        ['哈尔滨','5659','0.08','0.02','0.005','0.08'],
        ['长春','5332','0.08','0.02','0.003','0.07']
    ];
    // var city_i;
    var w;  //五险一金合计
    var i;
    var city;
    // alert( allCity[2][0]);
    $(".hot_city").click(function () {
        $("#setcity").val("");   //清空上一次的输入的城市信息
        $("#shuiqian_gongzi").val("");   //再次点击新城市的时候进行清空
        $("#shuihou input").val("")
        $("table tr").eq(0).find("td").eq(2).html("");
        $("table tr").eq(1).find("td").eq(2).html("");
        $("table tr").eq(2).find("td").eq(2).html("");
        $("table tr").eq(3).find("td").eq(2).html("");
        $("table tr").eq(4).find("td").eq(2).html("");
        $("table tr").eq(5).find("td").eq(2).html("");
        $("table tr").eq(6).find("td").eq(2).html("");
        $("table tr").eq(6).find("td").eq(1).html("");
        $("table tr").eq(7).find("td").eq(2).html("");
        $("table tr").eq(8).find("td").eq(2).html("");
        $("table tr").eq(9).find("td").eq(2).html("");

        city= $(this).text();  //获取当前点击城市
        // alert(city)
         $(".didian").html(city+'市');

        for(i=0;i<allCity.length;i++) {  //点击城市与存储数据的对比
            if (allCity[i][0] === city) {
                // city_i=i;    //对当前的城市编号进行记录
                 // alert('111');
                $(".didian_pingjungongzi").val(allCity[i][1]);
                // alert(allCity[i][1]*0.6)
                $("#shebao .btn1").html((allCity[i][1]*0.6).toFixed(2))  //社保基金上下限
                $("#shebao .btn2").html((allCity[i][1]*3).toFixed(2))

                $("table tr").eq(0).find("td").eq(1).html((allCity[i][2]*100).toFixed(2)+'%');
                $("table tr").eq(1).find("td").eq(1).html((allCity[i][3]*100).toFixed(2)+'%');
                $("table tr").eq(2).find("td").eq(1).html((allCity[i][4]*100).toFixed(2)+'%');
                $("table tr").eq(3).find("td").eq(1).html((allCity[i][5]*100).toFixed(2)+'%');
                // alert(allCity[i][1]+allCity[i][1]);  注意：这里的问题是出现了字符串的拼接

                 w=parseFloat(allCity[i][2])+parseFloat(allCity[i][3])+parseFloat(allCity[i][4])+parseFloat(allCity[i][5]);   //计算五险一金总和
                $("table tr").eq(4).find("td").eq(1).html((w*100).toFixed(2)+'%');
                break;

            }

        }

    })

    $("#setcity").click(function () {  //再次s输入新城市的时候进行清空

        $("#shuiqian_gongzi").val("");
        $("#shuihou input").val("")
        $("table tr").eq(0).find("td").eq(2).html("");
        $("table tr").eq(1).find("td").eq(2).html("");
        $("table tr").eq(2).find("td").eq(2).html("");
        $("table tr").eq(3).find("td").eq(2).html("");
        $("table tr").eq(4).find("td").eq(2).html("");
        $("table tr").eq(5).find("td").eq(2).html("");
        $("table tr").eq(6).find("td").eq(2).html("");
        $("table tr").eq(6).find("td").eq(1).html("");
        $("table tr").eq(7).find("td").eq(2).html("");
        $("table tr").eq(8).find("td").eq(2).html("");
        $("table tr").eq(9).find("td").eq(2).html("");
        // alert($("#setcity").val())


        var flag=0;
        $("#setcity_btn").click(  //用户自己输入城市的时候进行遍历
            function () {
                for(i=0;i<allCity.length;i++) {
                    if(allCity[i][0]===$("#setcity").val()){
                        flag=1;
                        var city= $("#setcity").val();  //获取当前输入城市
                        // alert(city)
                        $(".didian").html(city+'市');

                        // alert('222');
                        $(".didian_pingjungongzi").val(allCity[i][1]);
                        $("#shebao .btn1").html((allCity[i][1]*0.6).toFixed(2))
                        $("#shebao .btn2").html((allCity[i][1]*3).toFixed(2))

                        $("table tr").eq(0).find("td").eq(1).html((allCity[i][2]*100).toFixed(2)+'%');
                        $("table tr").eq(1).find("td").eq(1).html((allCity[i][3]*100).toFixed(2)+'%');
                        $("table tr").eq(2).find("td").eq(1).html((allCity[i][4]*100).toFixed(2)+'%');
                        $("table tr").eq(3).find("td").eq(1).html((allCity[i][5]*100).toFixed(2)+'%');
                        // alert(allCity[i][1]+allCity[i][1]);  注意：这里的问题是出现了字符串的拼接

                        w=parseFloat(allCity[i][2])+parseFloat(allCity[i][3])+parseFloat(allCity[i][4])+parseFloat(allCity[i][5]);   //计算五险一金总和
                        $("table tr").eq(4).find("td").eq(1).html((w*100).toFixed(2)+'%');

                        $("#jisuan").click(function () {
                            // alert(i);
                            var gongzi=$("#shuiqian_gongzi").val();
                            var s1,s2,s3,s4,s5;  //s1

                            if(gongzi<=allCity[i][1]*0.6 )
                            {
                                s1=(allCity[i][1]*0.6*allCity[i][2]);
                                s2=(allCity[i][1]*0.6*allCity[i][3]);
                                s3=(allCity[i][1]*0.6*allCity[i][4]);
                                s4=(allCity[i][1]*0.6*allCity[i][5]);
                                s5=(allCity[i][1]*0.6*w);

                                $("table tr").eq(0).find("td").eq(2).html(s1.toFixed(2));
                                $("table tr").eq(1).find("td").eq(2).html(s2.toFixed(2));
                                $("table tr").eq(2).find("td").eq(2).html(s3.toFixed(2));
                                $("table tr").eq(3).find("td").eq(2).html(s4.toFixed(2));
                                $("table tr").eq(4).find("td").eq(2).html(s5.toFixed(2));
                            }
                            if(gongzi>allCity[i][1]*0.6  && gongzi<allCity[i][1]*3)
                            {
                                s1=gongzi*allCity[i][2]
                                s2=gongzi*allCity[i][3]
                                s3=gongzi*allCity[i][4]
                                s4=gongzi*allCity[i][5]
                                s5=gongzi*w
                                // alert(s1);
                                $("table tr").eq(0).find("td").eq(2).html(s1.toFixed(2));
                                $("table tr").eq(1).find("td").eq(2).html(s2.toFixed(2));
                                $("table tr").eq(2).find("td").eq(2).html(s3.toFixed(2));
                                $("table tr").eq(3).find("td").eq(2).html(s4.toFixed(2));
                                $("table tr").eq(4).find("td").eq(2).html(s5.toFixed(2));
                            }
                            if(gongzi>=allCity[i][1]*3)
                            {
                                s1=(allCity[i][1]*3*allCity[i][2]);
                                s2=(allCity[i][1]*3*allCity[i][3]);
                                s3=(allCity[i][1]*3*allCity[i][4]);
                                s4=(allCity[i][1]*3*allCity[i][5]);
                                s5=(allCity[i][1]*3*w);

                                $("table tr").eq(0).find("td").eq(2).html(s1.toFixed(2));
                                $("table tr").eq(1).find("td").eq(2).html(s2.toFixed(2));
                                $("table tr").eq(2).find("td").eq(2).html(s3.toFixed(2));
                                $("table tr").eq(3).find("td").eq(2).html(s4.toFixed(2));
                                $("table tr").eq(4).find("td").eq(2).html(s5.toFixed(2));
                            }

                            var s6=parseFloat(gongzi)-parseFloat(s5);

                            $("table tr").eq(5).find("td").eq(2).html(s6.toFixed(2));  //扣除五险一金后月薪

                            var s7=s6-3500;  //纳税起征点
                            //alert(s7);
                            var shuili;
                            var susuan;

                            if(s7 <0) {
                                shuili=0;
                                susuan=0.00;
                            }
                            else if(s7 <=1500 && s7>=0) {
                                shuili=0.03;
                                susuan=0;
                            }
                            else if( s7>1500 && s7 <=4500) {
                                shuili=0.1;
                                susuan=105.00;
                            }
                            else if( s7>4500 && s7 <=9000) {
                                shuili=0.2;
                                susuan=555.00;
                            }
                            else if( s7>9000 && s7 <=35000) {
                                shuili = 0.25;
                                susuan = 1005.00;
                            }
                            else if( s7>35000 && s7 <=55000) {
                                shuili=0.3;
                                susuan=2755.00;
                            }
                            else if( s7>55000 && s7 <=80000) {
                                shuili=0.35;
                                susuan=5505.00;
                            }
                            else  if( s7>80000) {
                                shuili=0.45;
                                susuan=13505.00;
                            }
                            $("table tr").eq(6).find("td").eq(1).html(shuili*100+'%');
                            $("table tr").eq(7).find("td").eq(2).html(susuan.toFixed(2));

                            var nashui=s7*shuili-susuan;
                            $("table tr").eq(8).find("td").eq(2).html(nashui.toFixed(2));

                            var zuizhong;
                            zuizhong=s6-nashui;
                            $("table tr").eq(9).find("td").eq(2).html(zuizhong.toFixed(2));
                            $("#shuihou input").val(zuizhong.toFixed(2))

                        })

                        break;
                    }
                }
                if(flag!==1)
                {
                    $("#setcity").val("");   //清空上一次的输入的城市信息
                    alert('未录入该城市！！！')
                }
            })
    })

    $("#jisuan").click(function () {
            // alert(i);
            var gongzi=$("#shuiqian_gongzi").val();
            var s1,s2,s3,s4,s5;  //s1

            if(gongzi<=allCity[i][1]*0.6 )
            {
                s1=(allCity[i][1]*0.6*allCity[i][2]);
                s2=(allCity[i][1]*0.6*allCity[i][3]);
                s3=(allCity[i][1]*0.6*allCity[i][4]);
                s4=(allCity[i][1]*0.6*allCity[i][5]);
                s5=(allCity[i][1]*0.6*w);

                $("table tr").eq(0).find("td").eq(2).html(s1.toFixed(2));
                $("table tr").eq(1).find("td").eq(2).html(s2.toFixed(2));
                $("table tr").eq(2).find("td").eq(2).html(s3.toFixed(2));
                $("table tr").eq(3).find("td").eq(2).html(s4.toFixed(2));
                $("table tr").eq(4).find("td").eq(2).html(s5.toFixed(2));
            }
            if(gongzi>allCity[i][1]*0.6  && gongzi<allCity[i][1]*3)
            {
                s1=gongzi*allCity[i][2]
                s2=gongzi*allCity[i][3]
                s3=gongzi*allCity[i][4]
                s4=gongzi*allCity[i][5]
                s5=gongzi*w
                // alert(s1);
                $("table tr").eq(0).find("td").eq(2).html(s1.toFixed(2));
                $("table tr").eq(1).find("td").eq(2).html(s2.toFixed(2));
                $("table tr").eq(2).find("td").eq(2).html(s3.toFixed(2));
                $("table tr").eq(3).find("td").eq(2).html(s4.toFixed(2));
                $("table tr").eq(4).find("td").eq(2).html(s5.toFixed(2));
            }
            if(gongzi>=allCity[i][1]*3)
            {
                s1=(allCity[i][1]*3*allCity[i][2]);
                s2=(allCity[i][1]*3*allCity[i][3]);
                s3=(allCity[i][1]*3*allCity[i][4]);
                s4=(allCity[i][1]*3*allCity[i][5]);
                s5=(allCity[i][1]*3*w);

                $("table tr").eq(0).find("td").eq(2).html(s1.toFixed(2));
                $("table tr").eq(1).find("td").eq(2).html(s2.toFixed(2));
                $("table tr").eq(2).find("td").eq(2).html(s3.toFixed(2));
                $("table tr").eq(3).find("td").eq(2).html(s4.toFixed(2));
                $("table tr").eq(4).find("td").eq(2).html(s5.toFixed(2));
            }

            var s6=parseFloat(gongzi)-parseFloat(s5);

            $("table tr").eq(5).find("td").eq(2).html(s6.toFixed(2));  //扣除五险一金后月薪

            var s7=s6-3500;  //纳税起征点
            //alert(s7);
            var shuili;
            var susuan;

            if(s7 <0) {
                shuili=0;
                susuan=0.00;
            }
            else if(s7 <=1500 && s7>=0) {
                shuili=0.03;
                susuan=0;
            }
            else if( s7>1500 && s7 <=4500) {
                shuili=0.1;
                susuan=105.00;
            }
            else if( s7>4500 && s7 <=9000) {
                shuili=0.2;
                susuan=555.00;
            }
            else if( s7>9000 && s7 <=35000) {
                shuili = 0.25;
                susuan = 1005.00;
            }
            else if( s7>35000 && s7 <=55000) {
                shuili=0.3;
                susuan=2755.00;
            }
            else if( s7>55000 && s7 <=80000) {
                shuili=0.35;
                susuan=5505.00;
            }
            else  if( s7>80000) {
                shuili=0.45;
                susuan=13505.00;
            }
            $("table tr").eq(6).find("td").eq(1).html(shuili*100+'%');
            $("table tr").eq(7).find("td").eq(2).html(susuan.toFixed(2));

            var nashui=s7*shuili-susuan;
            $("table tr").eq(8).find("td").eq(2).html(nashui.toFixed(2));

            var zuizhong;
            zuizhong=s6-nashui;
            $("table tr").eq(9).find("td").eq(2).html(zuizhong.toFixed(2));
            $("#shuihou input").val(zuizhong.toFixed(2))



        })

})