async function sendPromptToBackend(prompt) {
    try {
        const response = await fetch('http://localhost:5001/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt: prompt }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Generated text:', data.text);
    } catch (error) {
        console.error('Error:', error);
    }
}

// メインの非同期関数
async function main() {
    // 'richText' クラスを持つ要素を選択してテキストを取得
    const richTextElement = document.querySelector('.richText');

    if (richTextElement) {
        const textContent = richTextElement.textContent;
        console.log('Selected text:', textContent);

        // 取得したテキストをバックエンドに送信
        await sendPromptToBackend(textContent);
    } else {
        console.log('指定された要素が見つかりませんでした。');
    }
}

// メイン関数を呼び出す
main();
