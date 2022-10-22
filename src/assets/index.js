//script menu lateral 

function openNav() {
  document.getElementById("menuLateralMobile").style.width = "100%"; // DEFINIR LARGURA AO CLICAR NO BOTÃO MENU VERSÃO MOBILE
}

function closeNav() {
  document.getElementById("menuLateralMobile").style.width = "0";
}

//para mostrar o menu lateral somente em telas até 480px
$(window).resize(function(){    
  if (window.matchMedia("(min-width: 480px)").matches) {
   $(".menuLateral").hide();
  }
   else {
   $(".menuLateral").show();
  }
}).resize()


//função para cadastrar email

function cadastrarNewsletter() {
  let email = document.getElementById("campo-email").value
  
  alert("email")
  console.log(email)
  }



// jQuery usado no rodapé para ocultar conteúdo dos itens Formas de Pagamento e  Redes Sociais

$(document).ready(function(){
  $("#b2").click(function(){
    $(".bandeiras").toggle();
  });

  /*$("#b3").click(function(){
    $(".redes").toggle();
  });*/
});


// outra forma de uso do jQuery, agora no conteúdo do campo Institucional

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});



// alterar VISIBILIDADE  do conteúdo de Institucional dependendo do tamanho de tela 

$(document).ready(function(){
$(window).resize(function(){    
    if (window.matchMedia("(max-width: 480px)").matches) {
      $("#panel").hide();
    }
    else {
      $("#panel").show();
    }   
}).resize()//  dispara no carregamento da página
});

//alterar VISIBILIDADE do conteúdo de Formas de Pagamento
$(document).ready(function(){
$(window).resize(function(){    
    if (window.matchMedia("(max-width: 480px)").matches) {
     $(".bandeiras").hide();
    }
    else {
      $(".bandeiras").show();
    }     
}).resize()
});

/*script login midia social  (NÃO ATIVAR NO ANGULAR)

var modal = document.getElementById('id01');

// Quando o usuário clicar em qualquer lugar fora do modal, feche-o

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 
    
 

/*carrossel banner principal (SEM BOOTSTRAP - não ativar no angular)
  
var myIndex = 0;
carousel();

function carousel() {
var i;
var x = document.getElementsByClassName("bannerPromo");
for (i = 0; i < x.length; i++) {
  x[i].style.display = "none";  
}
myIndex++;
if (myIndex > x.length) {myIndex = 1}    
x[myIndex-1].style.display = "block";  
setTimeout(carousel, 3000); // intervalo em milisegundos para alteração da imagem do banner Principal
}
*/



/* outra maneira de fazer login com redes sociais (-menos angular)
const handleClickOutside = (event) => {
  let overlay = document.getElementById("overlay");
  let modal = document.getElementById("modal");

  if (!modal.contains(event.target)) {
    modal.style.display = 'none';
    overlay.style.display = 'none';

    document.removeEventListener('click', handleClickOutside, false);
  }
}

const openModal = () => {
  let overlay = document.getElementById("overlay")
  let modal = document.getElementById("modal");

  overlay.style.display = 'flex'
  modal.style.display = 'flex'

  setTimeout(() => {
    document.addEventListener('click', handleClickOutside, false)
  }, 200);
} */
