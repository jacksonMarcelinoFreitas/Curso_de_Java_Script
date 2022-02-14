## 🔰Document Object Model
- O DOM é imprescindível para que consigamos acessar os elementos da página

Tudo em JS está dentro do objeto **window**.

-Arvore DOM (arvore hierarquica)

#

🖼️Aqui vai a imagem!
                                                

**Formas de acessar os elementos**

-Marca (getElementByTagName())
-ID (getElementById)
-Nome (getElementsByName)
-Classe (getElementsByClassName)
-Seletor (querySelector)

Após acessar os elementos é possível alterar seus estilos, e comportamentos manipulando o DOM

#

Exemplo:
        
        p1 = getElementByID('exemplo')
        p1.innerText = ('Outra mensagem')
        p11.innerHTML = ('Mensagem')

#

## Eventos DOM

Há vários exemplos possíveis, entre eles os **eventos de mouse**
        🔸mouseenter
        🔸mousemove
        🔸nousedown
        🔸mouseup
        🔸click

Para realizar os eventos, cria-se **funções**, que são blocos de códigos que executam uma função. E estes só acontecem quando o evento ocorre!

        var.addEventListener('evento', função)
