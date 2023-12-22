const chatGPT = async (messages, parameters = {}) => {
  const apikey = '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';
  if (messages.length === 0 || messages[0].constructor === String) {
    return await chatGPT([['user', messages[0]]]);
  }
  messages = messages.map(line => ({ role: line[0], content: line[1].trim() }));
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apikey}` },
    body: JSON.stringify({ model: 'gpt-3.5-turbo', messages, ...parameters }),
  });
  const data = await response.json();
  if (data?.error?.message) throw new Error(data.error.message);
  return data.choices[0].message.content.trim();
};


async function getAnswer() {
  const questionInput = document.getElementById('question-input').value.trim();

  if (!questionInput) {
    alert('질문을 입력하세요');
    return;
  }

  document.getElementById('question-input').value = '';

  try {
    alert('확인버튼을 누르시고 잠시만 기다려주세요');

    document.getElementById('question-input').value = '';

    const placeholderElement = document.getElementById('question-input');
    let placeholderValue = '잠시만 기다려주세요';

    const placeholderInterval = setInterval(() => {
      placeholderValue += '.';
      placeholderElement.placeholder = placeholderValue;
    }, 850);
    const answer = await chatGPT([
    ['system', '남자가 겨울에 출근할때 입으면 좋을옷 추천해드리겠습니다.'],
    ['user', '코트'],
    ['assistant', '코트는 울함유량이 많아 따뜻하면서도 스타일리쉬한 옷입니다. 직장 동료들 혹은 사업 미팅을 할때도 단정하게 입을 수 있는 옷입니다. 색상은 검정색, 남색, 회색을 추천합니다.'],
    ['user', '니트'],
    ['assistant', '니트는 따뜻하면서도 다양한 디자인이 많아 자신의 스타일에 맞게 골라입을수 있는 옷입니다. 따뜻한 느낌을 원하신다면 쉐기독 니트, 단정한 느낌을 원한다면 하찌니트, 귀여운 느낌을 원한다면 꽈배기 니트를 추천합니다. 색상은 아이보리색, 남색, 검정색, 회색, 올리브색 등을 추천합니다.'],
    ['user', '기모바지'],
    ['assistant', '기모바지는 바지 안에 부드러운 털을 더해 따뜻함을 극대화시킨 바지입니다. 밖으로 보이지 않아 스타일을 유지하면서도 안에는 털이 있어 따뜻핮니다. 출근할때는 기모 면바지를 추천합니다. 색상은 검정, 남색, 짙은회색을 추천합니다.'],
    ['user', '목도리'],
    ['assistant', '목도리는 추운바람이 부는 겨울에 얼굴에 부는 바람을 막아주는 역할을 합니다. 다양한 색상과 패턴을 통해 더 멋을 낼 수 있습니다. 멋쟁이들의 필수템입니다. 색상은 핑크색, 하늘색, 초록색 등 밝은 색깔과 체크같은 패턴을 추천합니다.'],
    ['user', '장갑'],
    ['assistant', '장갑은 겨울에 손이 시려울때  따뜻하게 해줍니다. 게다가 눈이 올때 눈사람을 만들때 손이 안시렵게 해줍니다. 종류는 벙어리 장갑, 반장갑 추천합니다. 다같이 눈사람 만들러 가볼까요?'],
    ['user', '털신발'],
    ['assistant', '털신발은 추운 겨울날 눈밭을 마음껏 걸어도 춥지 않은 신발입니다. 안에는 털때문에 따뜻하고 겉은 방수가되어 눈을 완벽히 막아줍니다. 겨울 커플템으로 추천합니다. 색상은 갈색 추천합니다.'],

    ['user', questionInput],

    ['system', '여자가 여름에 휴가지에서 입으면 좋을옷 추천해드리겠습니다.'],
    ['user', '민소매 원피스'],
    ['assistant', '민소매 원피스는 민소매라서 시원하고 아름다움을 뽐낼수 있는 옷입니다. 시원함과 예쁨 두가지 모두를 놓치지마세요! 색상은 흰색과 파란색 추천합니다.'],
    ['user', '반팔티'],
    ['assistant', '반팔티는 평범하지만 그래픽,색상 등등 마음껏 자신을 표현할 수 있는 옷입니다. 멋지면서도 시원함도 갖추고 있습니다. 자신의 취향을 맘껏 뽐내보세요. '],
    ['user', '반바지'],
    ['assistant', '반바지는 귀여우면서도 편한 활동성과 시원함을 두루 갖춘 만능 바지입니다. 여러 재질의 반바지가 있어 다양하게 즐길 수 있습니다. 재질은 청, 린넨 등을 추천합니다.'],
    ['user', '샌들'],
    ['assistant', '샌들은 더운 여름날 발을 쾌적하게 해주는 신발입니다. 귀여우면서 시원한 샌들을 신고 해변가를 다녀보세요. 색상은 갈색, 검정색, 흰색을 추천합니다.'],
    ['user', '선글라스'],
    ['assistant', '선글라스는 뜨거운 여름 태양빛을 막아주면서 동시에 시크한 멋을 뽐낼 수 있는 아이템입니다. 다같이 레옹이 돠어볼까요? 색상은 검정색 추천합니다.'],
    
    ['user', questionInput],

    ]);
    

    clearInterval(placeholderInterval);

    console.log('Answer:', answer);
    
    const answerContainer = document.getElementById('answer-container');

    const answerDiv1 = document.createElement('div');
    answerDiv1.classList.add('chat-bubble');
    answerDiv1.innerHTML = `
      <p class="question">Q: ${questionInput}</p>
      <p class="answer">A: ${answer.replace(/\n/g, '<br>')}</p>`;
    answerContainer.appendChild(answerDiv1);
    

    alert('완료되었습니다!');


  } catch (e) {
    console.log(e.message);
  }

  document.getElementById('question-input').value = '';
  document.getElementById('question-input').placeholder = '사용법 예시: 나는 남자고 지금은 겨울인데 출근할때 입을 옷 추천해줘';

}


document.getElementById('usage-button').addEventListener('click', () => {
  alert("옷피티 사용법\n\n옷피티 웹은 ,옷피티 웹은 아침마다 옷 고르기 힘든분들, 옷살때 무엇을 사야할지 고민되는 분들 등.. 정보를 입력하면 상황과 분위기 그리고 날씨에 맞게 AI가 옷을 추천해주는 웹 입니다.\n\n구체적으로 질문할수록 더욱 높은 질의 정보를 얻으실수있습니다.\n\n사용법 예시: 나는 남자고 지금은 겨울인데 출근할때 입을 옷 추천해줘.");
});