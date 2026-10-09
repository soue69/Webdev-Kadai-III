document.addEventListener('DOMContentLoaded', () => {
  const commentText = document.getElementById('commentText') || document.querySelector('textarea[name="comment"]');
  const countView = document.getElementById('countView');
  const commentForm = document.getElementById('commentForm');

  if (commentText && countView) {
    commentText.addEventListener('input', () => {
      countView.textContent = `現在: ${commentText.value.length}文字`;
    });
  }

  if (commentForm) {
    commentForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(commentForm);

      fetch(commentForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          alert('コメントを送信しました！ありがとうございます。');
          commentForm.reset();
          if (countView) {
            countView.textContent = '現在: 0文字';
          }
        } else {
          alert('送信に失敗しました。もう一度お試しください。');
        }
      })
      .catch(() => {
        alert('エラーが発生しました。接続を確認してください。');
      });
    });
  }
});