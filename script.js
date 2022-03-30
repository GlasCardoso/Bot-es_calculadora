 function somar(){
        var a = window.document.getElementById('sum')
        a.innerText = 'O'
        a.style.background = 'red'
        document.getElementById('resultado').value = operSum
      }
      function subtrair(){
        var a = window.document.getElementById('sub')
        a.innerText = 'O'
        a.style.background = 'red'
        document.getElementById('resultado').value = operSub
      }
      function multiplicar(){
        var a = window.document.getElementById('mult')
        a.innerText = 'O'
        a.style.background = 'red'
        document.getElementById('resultado').value = operMult
      }
      function dividir(){
        var a = window.document.getElementById('div')
        a.innerText = 'O'
        a.style.background = 'red'
        document.getElementById('resultado').value = operDiv
      }

      function calcular(){     

      if(num1 == '' || num1 == null){
      alert('Favor digitar um número válido')
      document.getElementById('num1').focus()
      return false
      }

      if(num2 == '' || num2 == null){
      alert('Favor digitar um número válido')
      document.getElementById('num2').focus()
      return false
    }

     var resultado = null

      //conversão

      num1 = Number(num1)
      num2 = Number(num2)

      document.getElementById('resultado').value = resultado
    }
        
        