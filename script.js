// დავალება 20

// სერვერიდან წამოიღეთ მონაცემები ამ endpoint-ის გამოყენებით https://jsonplaceholder.typicode.com/users
//  ჯავასკრიპტის გამოყენებით გამოიტანეთ  შემდეგი ინფორმაცია:name, email და address;
// დაამატეთ სტილებიც რომ ვიზუალურად კარგად გამოიყურებოდეს, სასურველი იქნება გამოიყენოთ grid-template-columns: repeate(3,1fr) სტრუქტურა, რომ ქარდები სამ-სამ ბლოკებად იყოს განაწილებული.

 
const xhr = new XMLHttpRequest()
xhr.open("GET", "https://jsonplaceholder.typicode.com/users")
xhr.send()
xhr.onload = () => {
  if (xhr.status === 200) {
    const userInfo = JSON.parse(xhr.response)
    const cardsContainer = document.createElement("div")
    cardsContainer.setAttribute("id", "cardsContainer")
    
    for ( let i = 0; i < userInfo.length; i++) {
      const userInfoContent = userInfo[i]
    
    const cardBox = document.createElement("div")
    cardBox.setAttribute("id", "cardBox")
    
    const name = document.createElement("span")
    name.setAttribute("id", "name")
    cardBox.appendChild(name)
    
    const email = document.createElement("span")
    email.setAttribute("id", "email")
    cardBox.appendChild(email)
    
    const address = document.createElement("p")
    address.setAttribute("id", "address")
    cardBox.appendChild(address)
    
      name.textContent = userInfoContent.name
      email.textContent = userInfoContent.email
      address.textContent = `${userInfoContent.address.city}, ${userInfoContent.address.street}, ${userInfoContent.address.suit}, ${userInfoContent.address.zipcode}`
      
      cardsContainer.appendChild(cardBox)
      document.body.appendChild(cardsContainer)
    }
  }
}