# yanchi

�Լ�д��һ�����ӳټ��ػص���������jQuery;��ʵ����lazyload���ơ�

lazyload������ͼƬ�����������������INPUT ,DIV����Ԫ��

�÷���

     //�����������ĵ���ȫ���ص������        $(function () {            //�������
            var y = new YanChi();
            //�󶨶���
            y.init(".callback", 100);
            //�ص�����
            //current��ǰ����
            //objects���ж���
            y.callback(function (current, objects) {
                //�������ĸ�����ͷ�����һ������
                //ģ�⹤������
                $.get("http://code.jquery.com/jquery-1.12.4.min.js", function () {
                    current.html("�Ѿ�����");
                });
            });
            y.load();


            var YC2 = new YanChi();         
            YC2.init(".waitInput", 100);
            YC2.callback(function (current, objects) {
                current.val("loaded");            });
            YC2.load();
        });