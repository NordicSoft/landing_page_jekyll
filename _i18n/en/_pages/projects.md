{% include cookie-content.html %}
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="/assets/js/lazysizes.min.js" async=""></script>
<section id="projects">
<div class="projects">
  <div class="container">
    <div class="start-conversation">
        <p class="h2-text">our work</p>
    </div>
    <div class="project-head">
    <div class="project-col-head">
    <h1 class="selected-projects">Projects</h1>
    </div>
    <div class="project-col-head">
    <p>We help businesses implement the ideas and elevate their value through custom software development, product design, QA and consultancy services.</p>
    </div>
    </div>
    <div class="project-cols">
      <div class="project-col">
              <div class="project">
          {% include lazyload.html image_src="/assets/images/dex-1x.webp" srcset="/assets/images/dex-2x.webp 2x" alt="" %}
          <div class="project-name">
            <p>1/4</p>
            <div>
              <h2>DEX.GURU</h2>
              <p>Open finance protocol website</p>
            </div>
          </div>
        </div>
        <div class="project">
          {% include lazyload.html image_src="/assets/images/defi-1x.webp" src="/assets/images/defi-1x.webp" srcset="/assets/images/defi-2x.webp 2x" alt="" %}
          <div class="project-name">
            <p>2/4</p>
            <div>
              <h2>DEFI</h2>
              <p>Digital media and analytical services provider</p>
            </div>
          </div>
        </div>
      </div>
      <div class="project-col">
        <div class="project">
        {% include lazyload.html image_src="/assets/images/bzx-1x.webp" src="/assets/images/bzx-1x.webp" srcset="/assets/images/bzx-2x.webp 2x" alt="" %}
          <div class="project-name">
            <p>3/4</p>
            <div>
              <h2>BZX</h2>
              <p>Crypto Margin Trading Platform</p>
            </div>
          </div>
        </div>

        <div class="project">
          {% include lazyload.html image_src="/assets/images/torque-1x.webp" src="/assets/images/torque-1x.webp" srcset="/assets/images/torque-2x.webp 2x" alt="" %}
          <div class="project-name">
            <p>4/4</p>
            <div>
              <h2>TORQUE</h2>
              <p>Platform and website for crypto borrowing</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  </div>

  <div class="project-down">
    <div class="container">
      <div class="project-foot-text">
        <div class="h2-text">Want to discuss your project?</div>
        <a class="mail" href="mailto:info@nordicsoft.ee"
              title="email" aria-label="email">Send an enquiry.</a>
      </div>
    </div>

  </div>
</section>
