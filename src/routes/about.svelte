<script>
  import { GithubIcon, LinkedinIcon } from "svelte-feather-icons";

  let src = "me.jpg";
</script>

<style>
  .about-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .social-links-container {
    margin-left: -2.5rem;
  }

  .social-link {
    display: flex;
  }

  section {
    margin-bottom: 3rem;
  }

  a {
    align-items: center;
    text-decoration: none;
    padding-left: 0.25rem;
    color: #89b0ae;
  }

  img {
    border-radius: 50%;
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<h1>About</h1>

<div class="about-container">
  <div>
    <section class="bio-section">
      <p>
        Hi, I'm Maria! I'm a software engineer from Bulgaria 🇧🇬 living in
        Portland, OR 🇺🇸.
      </p>
      <p>
        My interest in coding started in the days of MySpace when I learned I
        could edit the HTML & CSS to have the coolest looking page. I followed
        this interest all the way to college where I studied Computer Science.
      </p>
      <p>
        I've worked in different parts of the stack and get just as excited to
        create user friendly interfaces as resilient services.
      </p>
      <p>
        I really enjoy being a constant beginner and learning new things. These
        days I'm focused on deeply understanding functional programming with
        Elixir and exploring new front-end frameworks like Svelte.
      </p>
      <p>
        Outside of work, you can find me exploring the Pacific Northwest with my
        family, babying the plants in my garden, playing a board game, reading a
        comic book or working on a new sewing project.
      </p>
      <p>
        You can learn more about my experience from my <a href="resume">résumé.</a>
      </p>
    </section>
    <section>
      <h2>Find me around the web</h2>
      <ul class="social-links-container">
        <li class="social-link">
          <GithubIcon size="24" />
          <a href="https://github.com/mbazhlekova">GitHub</a>
        </li>
        <li class="social-link">
          <LinkedinIcon size="24" />
          <a href="https://www.linkedin.com/in/maria-bazhlekova/">LinkedIn</a>
        </li>
      </ul>
    </section>
    <section>
      <h2>This site</h2>
      <p>
        This site is powered by
        <a href="https://svelte.dev/">Svelte</a>
        &
        <a href="https://sapper.svelte.dev/">Sapper</a>
      </p>
    </section>
  </div>
  <img {src} alt="it's a-me!" />
</div>
