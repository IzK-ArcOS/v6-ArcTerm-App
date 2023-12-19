<script lang="ts">
  import { ArcTerm } from "$state/ArcTerm/ts/terminal/main";
  import {
    arcCommands,
    desktopSpecific,
  } from "$state/ArcTerm/ts/terminal/store";
  import { focusedPid } from "$ts/stores/apps";
  import { App } from "$types/app";
  import { onMount } from "svelte";
  import "./css/main.css";

  export let app: App;
  export let pid: number;

  let arcTerm: ArcTerm;
  let target: HTMLDivElement;

  onMount(() => {
    arcTerm = new ArcTerm(
      target,
      [...arcCommands, ...desktopSpecific],
      app,
      pid,
      (a: ArcTerm) => {
        a.std.clear();
      }
    );
  });

  function focus() {
    if (
      !arcTerm ||
      !arcTerm.input ||
      !arcTerm.input.current ||
      $focusedPid != pid
    )
      return;

    arcTerm.input.current.focus();

    if (!target) return;

    target.scrollTo(0, target.scrollHeight);
  }

  setInterval(focus, 10);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="terminal-renderer" bind:this={target} on:click={focus} />
