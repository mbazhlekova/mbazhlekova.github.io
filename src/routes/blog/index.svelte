<script context="module">
  import { CalendarIcon } from "svelte-feather-icons";

  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<style>
  ul {
    margin: 0 0 1em -2.5rem;
    line-height: 1.5;
  }

  li {
    list-style-type: none;
    margin-bottom: 0.5rem;
  }

  a {
    text-decoration: none;
    font-size: 20px;
  }

  a:hover {
    color: #89b0ae;
  }

  .date {
    font-size: 14px;
    margin-bottom: 0.25rem;
    display: flex;
  }

  .icon {
    margin-right: 0.25rem;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <div class="date">
        <div class="icon">
          <CalendarIcon size="1.5x" />
        </div>
        {post.date}
      </div>
      <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
    </li>
  {/each}
</ul>
