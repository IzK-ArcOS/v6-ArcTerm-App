<script lang="ts">
  import { ArcTerm } from "$state/ArcTerm/ts/terminal/main";
  import {
    arcCommands,
    desktopSpecific,
  } from "$state/ArcTerm/ts/terminal/store";
  import { createErrorDialog } from "$ts/process/error";
  import { focusedPid } from "$ts/stores/apps";
  import { App } from "$types/app";
  import { onMount } from "svelte";
  import "./css/main.css";
  import { WarningIcon } from "$ts/images/general";

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
      },
    );

    createErrorDialog(
      {
        title: "Delete ArcOS Account",
        message:
          "Are you sure you want to delete your ArcOS account? This will delete any and all user data associated with this account. These changes cannot be reverted.",
        buttons: [
          { caption: "Proceed", action() {} },
          { suggested: true, caption: "Back to safety", action() {} },
        ],
        image: WarningIcon,
      },
      pid,
      true,
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
