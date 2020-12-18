<template>
  <a href="https://github.com/SoftCreatR/softcreatr.github.io" class="github-corner" aria-label="View source on GitHub">
    <OctocatIcon alt="View source on GitHub"/>
  </a>
</template>

<script>
import OctocatIcon from '../assets/octocat.svg';

export default {
  name: 'Octocat',
  components: {
    OctocatIcon
  },
  props: {
    item: Object
  },
}
</script>

<style lang="scss">
.github-corner {
  &:hover {
    .octocat_svg__octo-arm,
    .octo-arm {
      animation: octocat-wave 560ms ease-in-out;
    }
  }

  > svg {
    border: 0;
    color: #fff;
    fill: #151513;
    position: absolute;
    right: 0;
    top: 0;
  }
}

@media (max-width: 500px) {
  .github-corner {
    .octocat_svg__octo-arm,
    .octo-arm {
      animation: octocat-wave 560ms ease-in-out;
    }

    .github-corner {
      .octocat_svg__octo-arm,
      .octo-arm {
        &:hover {
          animation: none;
        }
      }
    }
  }
}

@keyframes octocat-wave {
  0%, 100% {
    transform: rotate(0);
  }
  
  20%, 60% {
    transform: rotate(-25deg);
  }
  
  40%, 80% {
    transform: rotate(10deg);
  }
}
</style>
