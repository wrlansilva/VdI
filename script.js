function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homen'
            if (idade >=0 && idade <10) {
                  //Criança
                  img.setAttribute('src', 'lb.png')
                  document.body.style.background = '#284651'
            }else if (idade < 21) {
                //Jovem
                document.body.style.background = '#140b09'
                img.setAttribute('src', 'yb.png')
            }else if (idade <50) {
                //Adulto
                document.body.style.background = '#3b4532'
                img.setAttribute('src', 'am.png')
            }else{
                //Idoso
                document.body.style.background = '#676b71'
                img.setAttribute('src', 'om.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <10) {
                //Criança
                document.body.style.background = '#cc7855'
                img.setAttribute('src', 'lg.png')
          }else if (idade < 21) {
              //Jovem
              document.body.style.background = '#141c17'
              img.setAttribute('src', 'yg.png')
          }else if (idade <50) {
              //Adulto
              document.body.style.background = '#2e2832'
              img.setAttribute('src', 'aw.png')
          }else{
              //Idoso
              document.body.style.background = '#302428'
              img.setAttribute('src', 'ow.png')
          }

        }
        
        res.innerHTML = `${genero} com ${idade} anos.`
        res. appendChild(img)
        
    }
}