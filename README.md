# yanchi

�Լ�д��һ�����ӳټ��ػص���������jQuery;��ʵ����lazyload���ơ�

lazyload������ͼƬ�����������������INPUT ,DIV����Ԫ��

�÷���

HTML:
<HTML>
<div class="callback" data-sku="211-110" data-pid="29434"></div>
//�����������ĵ���ȫ���ص������$(function(){	//�������
	var y = new YanChi();
	//��ʼ���������ð󶨺͸�Ӧ��ֵ
	y.init(".callback", 200);
	//�ص�����
	//�ص�����1����ǰ
	y.callback(function (current,objects) {    
		console.log(current);	
		console.log(objects);

	y.load();});