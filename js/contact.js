document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 获取表单数据
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // 这里可以添加表单验证逻辑
    
    // 这里可以添加发送表单数据到服务器的代码
    console.log('表单数据：', formData);
    
    // 显示提交成功消息
    alert('消息已发送！我们会尽快回复您。');
    
    // 重置表单
    this.reset();
}); 