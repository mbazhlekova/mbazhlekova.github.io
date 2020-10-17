<script>
  import { onMount } from "svelte";

  let PdfViewer;

  let resumeSrc = "maria-bazhlekova-resume.pdf"
 
  onMount(async () => {
    const module = await import("svelte-pdf");
    PdfViewer = module.default;
  });
</script>

<svelte:head>
  <title>Résumé</title>
</svelte:head>

<svelte:component this={PdfViewer} url={resumeSrc} scale={1.5} showButtons={false} showBorder={false}/>