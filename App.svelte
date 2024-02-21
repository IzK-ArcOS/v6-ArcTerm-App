<script lang="ts">
  import { ArcTerm } from "$state/ArcTerm/ts/terminal/main";
  import { arcTermModeIntro } from "$state/ArcTerm/ts/terminal/mode";
  import { arcCommands, desktopSpecific } from "$state/ArcTerm/ts/terminal/store";
  import { App } from "$types/app";
  import { onMount } from "svelte";
  import "./css/main.css";

  export let app: App;
  export let pid: number;

  let target: HTMLDivElement;

  onMount(() => {
    new ArcTerm(target, [...arcCommands, ...desktopSpecific], app, pid, arcTermModeIntro);
  });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="terminal-renderer" bind:this={target} />
