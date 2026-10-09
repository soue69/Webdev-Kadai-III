document.addEventListener('DOMContentLoaded', () => {
  const commentText = document.getElementById('commentText') || document.querySelector('textarea[name="comment"]');
  const countView = document.getElementById('countView');
  const commentForm = document.getElementById('commentForm') || document.querySelector('form');

  if (commentText && countView) {
    commentText.addEventListener('input', () => {
      countView.textContent = `現在: ${commentText.value.length}文字`;
    });
  }

  if (commentForm) {
    commentForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(commentForm);

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          alert('コメントを送信しました！ありがとうございます。');
          commentForm.reset();
          if (countView) {
            countView.textContent = '現在: 0文字';
          }
        } else {
          alert('送信エラー: ' + data.message);
        }
      })
      .catch(err => {
        alert('送信に失敗しました。接続を確認してください。');
        console.error(err);
      });
    });
  }
});