$(function () {
    $(".didian").html('北京市');
    $(".didian_pingjungongzi").val('9240');
    $("#shebao .btn1").html('5544.00')
    $("#shebao .btn2").html('27720.00')

    $("table tr").eq(0).find("td").eq(1).html('8.00%');
    $("table tr").eq(1).find("td").eq(1).html('2.00%');
    $("table tr").eq(2).find("td").eq(1).html('0.20%');
    $("table tr").eq(3).find("td").eq(1).html('12.00%');
    $("table tr").eq(4).find("td").eq(1).html('22.2%');

    $("#jisuan").click(function () {
        var gongzi=$("#shuiqian_gongzi").val();
        var s1,s2,s3,s4,s5;  //s1

        if(gongzi<=5544 )
        {

            s1=443.52;
            s2=110.88;
            s3=11.088;
            s4=665.28;
            s5=1230.768;

            $("table tr").eq(0).find("td").eq(2).html(s1.toFixed(2));
            $("table tr").eq(1).find("td").eq(2).html(s2.toFixed(2));
            $("table tr").eq(2).find("td").eq(2).html(s3.toFixed(2));
            $("table tr").eq(3).find("td").eq(2).html(s4.toFixed(2));
            $("table tr").eq(4).find("td").eq(2).html(s5.toFixed(2));
        }
        if(gongzi>5544  && gongzi<27720)
        {
             s1=gongzi*0.08
             s2=gongzi*0.02
             s3=gongzi*0.002
             s4=gongzi*0.12
             s5=gongzi*0.222
           // alert(s1);
            $("table tr").eq(0).find("td").eq(2).html(s1.toFixed(2));
            $("table tr").eq(1).find("td").eq(2).html(s2.toFixed(2));
            $("table tr").eq(2).find("td").eq(2).html(s3.toFixed(2));
            $("table tr").eq(3).find("td").eq(2).html(s4.toFixed(2));
            $("table tr").eq(4).find("td").eq(2).html(s5.toFixed(2));
        }
        if(gongzi>=27720)
        {
            s1=2217.60
            s2=554.40
            s3=55.44
            s4=3326.40
            s5=6153.84

            $("table tr").eq(0).find("td").eq(2).html(s1.toFixed(2));
            $("table tr").eq(1).find("td").eq(2).html(s2.toFixed(2));
            $("table tr").eq(2).find("td").eq(2).html(s3.toFixed(2));
            $("table tr").eq(3).find("td").eq(2).html(s4.toFixed(2));
            $("table tr").eq(4).find("td").eq(2).html(s5.toFixed(2));
        }

        var s6=parseFloat(gongzi)-parseFloat(s5);
        // alert(s1)
        // alert(s2)
        // alert(s3)
        // alert(s4)
        // alert(s5)
        // alert(s6)
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