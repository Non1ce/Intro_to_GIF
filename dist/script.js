const func = () => {
      document.getElementById('back')
        .style.transition = '0s'
      document.getElementById('back')
        .style.opacity = '0'
      document.getElementById('prog-time')
        .style.transition = '0s'
      document.getElementById('prog-time')
        .style.opacity = '1'
  
      document.getElementById('prog-time').innerHTML = ''
  
      new TypeIt("#prog-time", {
        speed: 95,
        waitUntilVisible: true,
        loop: false,
        lifeLike: true, 
        afterComplete: async (instance) => {
          instance.destroy()
          document.getElementById('back')
            .style.transition = '5s'
          document.getElementById('back')
             .style.opacity = '0.9'
          document.getElementById('prog-time')
            .style.transition = '5s'
          document.getElementById('prog-time')
            .style.opacity = '0.8'
          setTimeout(() => func(), 20000)
        },
      }).pause(1200)
        .type("<strong>NIK</strong>", {delay: 700})
        .move(-1, {delay: 300})
        .type("C")
        .move(null, {to: "END"})
        .break({delay: 500})
        .type("Junior ML Engineer", {delay: 1500})
        .delete(11, {delay: 2000})
        .type("Data Scientist", {delay: 1000})
        .move(-14, {delay: 700})
        .delete(7, {delay: 700})
        .move(null, {to: "END"}, {delay: 3000})
        .go()
}

func()