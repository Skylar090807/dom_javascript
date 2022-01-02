const items = document.querySelector('.items')
const input = document.querySelector('.footer__input')
const addBtn = document.querySelector('.footer__button')

function onAdd() {
  //1. 사용자가 입력한 텍스트 받아온다. 아무 것도 입력하지 않으면 리스트에 추가하지 않는다.
  const text = input.value
  if (text === '') {
    input.focus()
    return
  }
  //2. 새로운 아이템을 만든다 (텍스트 + 삭제 버튼)
  const item = createItem(text)
  //3. items 컨테이너 안에 새로 만든 아이템을 추가한다. list가 늘어나면 스크롤 된다.
  items.appendChild(item)
  item.scrollIntoView({ block: 'center' })
  //4. 인풋을 초기화 한다.
  input.value = ''
  input.focus()
}

function createItem(text) {
  const itemRow = document.createElement('li')
  itemRow.setAttribute('class', 'item__row')

  const item = document.createElement('div')
  item.setAttribute('class', 'item')

  const name = document.createElement('span')
  name.setAttribute('class', 'item__name')
  name.innerText = text

  const deleteBtn = document.createElement('button')
  deleteBtn.setAttribute('class', 'item__delete')
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'
  deleteBtn.addEventListener('click', () => {
    itemRow.remove()
  })

  const itemDivider = document.createElement('div')
  itemDivider.setAttribute('class', 'item__divider')

  item.appendChild(name)
  item.appendChild(deleteBtn)

  itemRow.appendChild(item)
  itemRow.appendChild(itemDivider)
  return itemRow
}

addBtn.addEventListener('click', () => {
  onAdd()
})

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    onAdd()
  }
})
