fetch('https://striveschool-api.herokuapp.com/books')
  .then((res) => {
    if (res.ok) {
      return res.json()
    } else {
      if (res.status === 404) {
        throw new Error('404 - Not Found')
      } else if (res.status === 500) {
        throw new Error('500 - Internal Server Error')
      } else {
        throw new Error('Errore generico')
      }
    }
  })
  .then((booksData) => {
    for (let i = 0; i <= booksData.length - 1; i++) {
      // SEZIONE COL
      const row = document.getElementById('row')
      const column = document.createElement('div')
      column.classList.add('col', 'my-3')
      row.appendChild(column)

      const card = document.createElement('div')
      card.classList.add('card', 'h-100')
      column.appendChild(card)

      // SEZIONE IMG
      const cardImg = document.createElement('div')
      const bookImg = document.createElement('img')
      bookImg.classList.add('card-img-top')
      bookImg.style.height = '400px'
      bookImg.src = booksData[i].img
      card.appendChild(cardImg)
      cardImg.appendChild(bookImg)

      // SEZIONE CARD-BODY
      const cardBody = document.createElement('div')
      cardBody.classList.add('card-body')
      card.appendChild(cardBody)

      // SEZIONE CARD-TEXT
      const cardText = document.createElement('div')
      cardBody.appendChild(cardText)

      // SEZIONE TITOLO
      const title = document.createElement('h5')
      title.classList.add('card-title')
      title.innerText = booksData[i].title
      cardText.appendChild(title)

      // SEZIONE PREZZO
      const price = document.createElement('p')
      price.classList.add('card-text')
      price.innerText = booksData[i].price + '€'
      cardText.appendChild(price)

      // SEZIONE SCARTA
      const scarta = document.createElement('button')
      scarta.classList.add('btn', 'btn-danger', 'me-3')
      scarta.innerText = 'SCARTA'
      cardText.appendChild(scarta)

      //   SEZIONE COMPRA
      const compra = document.createElement('button')
      compra.classList.add('btn', 'btn-success', 'my-3')
      compra.innerText = 'COMPRA ORA'
      cardText.appendChild(compra)

      scarta.addEventListener('click', () => {
        card.classList.add('d-none')
      })
    }

    // const buy = (e) => {
    //   const bookTitle = e.target.parentElement.querySelector('h5').innerText
    //   const list = document.getElementById('cart') //reference ul
    //   const newLi = document.createElement('li')
    //   list.appendChild(newLi)
    //   newLi.innerText = bookTitle
    //   localStorage.setItem('shoppingCart', JSON.stringify(newLi))
    // }
    // compra.addEventListener('click', buy)

    const remove = document.createElement('button')
    remove.classList.add('btn', 'btn-danger')
    remove.innerText = 'RIMUOVI'
    newLi.appendChild(remove)

    remove.addEventListener('click', () => {
      newLi.classList.add('d-none')
    })
  })
  .catch((err) => {
    console.log(err)
  })
