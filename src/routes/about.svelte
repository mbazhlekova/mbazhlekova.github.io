<script>
  let src = "me.jpg";
</script>

<style>
  .about-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
  </div>
  <img {src} alt="it's a-me!" />
</div>
