<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Window Pains</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/style.css">
<head>
<body onload="loadr();">

  <div class="desktop">

    <!-- ═══════- Desktop Icons  -═══════ {{{ -->
    <ul class="icons">
      <li class="icon" onclick="showDiv('about');"> <img src="img/question.png" alt=""> </li>
      <li class="icon" onclick="showDiv('meh');"> <img src="img/folder.png" alt=""> </li>
    </ul>
    <!-- ═══════- END Desktop Icons  -═══════ }}} -->

    <!-- ═══════- about -═══════ {{{ -->
    <div id="about" class="hide window project">
      <div class="title-bar"> About <b class="close_window" onclick="hideDiv('about')">&times;</b> </div>
      <div class="content">
        <h1>Silly thing...</h1>
        <p>Do you ever just wish you could go back to windows 95?</p>
        <h4>Now you can</h4>
        <p>Add as many of these icons as you want, then create a div with it's corresponding id...</p>

        <p> <i>this serves no purpose...</i> </p>
      </div> <!-- END class="content"-->
    </div>
    <!-- ═══════- END about -═══════ }}} -->

    <!-- ═══════- meh -═══════ {{{ -->
    <div id="meh" class="hide window project">
      <div class="title-bar"> Meh <b class="close_window" onclick="hideDiv('meh')">&times;</b> </div>
      <div class="content">
        <h1>Nothing to see here</h1>
        <p>Just a placeholder to show you...</p>
      </div> <!-- END class="content"-->

    </div>
    <!-- ═══════- END meh -═══════ }}} -->

  </div> <!-- END class="desktop"-->


  <!-- Task Bar/Menu {{{ -->
  <div class="taskbar">
    <!-- Start Button {{{ -->
    <div class="startmenu">
      <button onclick="showToggle('start-menu')" class="start-btn">START</button>
      <div id="start-menu" class="startmenu-content">
        <nav>
          <a href="#about" onclick="showDiv('about');">About</a>
          <a href="#meh" onclick="showDiv('meh');">meh</a>
        </nav>
      </div>
    </div>
    <!-- }}} -->

    <div class="tasks">
      <button id="about-btn" class="hide" onclick="showDiv('about');">About</button>
      <button id="meh-btn" class="hide" onclick="showDiv('meh');">meh</button>
    </div>

    <div class="tray">
      <div id="clock"></div>
      <div id="telegram"> <a href="#"> <img src="img/telegram.png" alt=""></a> </div>
      <div id="skype"> <a href="#"> <img src="img/skype.png" alt=""></a> </div>

    </div>

  </div>
  <!-- }}} END Task Bar/Menu -->

  <!-- Scripts: {{{ -->
  <script src="scripts/window-pain.js"></script>
  <script src="scripts/clock.js"></script>
  <!-- }}} -->

</body>
</html>
