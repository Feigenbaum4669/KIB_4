<?php
 session_start();
require_once("PHP/myPage.php");

$P = new WPPTPage('4',"Historia");
$P->SetDescription("Historia transakcji");
$P->AddKeywords("historia, bank");
$P->AddJS("allign.js");
$P->AddJS("jquery-1.11.1.js");
$P->AddJS("historia.js");




echo $P->Begin();
?>

<h1>Bank WPPT</h1>
</div>
<p>Członek grupy Banki PWr</p>

<?php 
echo $P->Main(); ?>

<article>
<header>
<h2>Historia transakcji</h2>
</header>

  <section>
<h3>Instrukcja</h3>
  <p> Poniżej przedstawiono wszystkie zaksięgowane przelewy użytkownika.</p>
  </section>
  
  <section>
   <div class="col-6-6">
        <div class="panel">
         <section>
<h3>Zaksięgowane transakcje:</h3>
 <div id="historyField" class="panel result">
          &nbsp;
        </div>
 </section>
         
          
        </div>
        
        
        </div>
      </section>
     
</article>


<?php
 echo  $P->End();
?>  