<template>
  <div class="app">
    
    <div class="bg-blue px-3 pb-4"> <!-- px define padding left e right -->
      <div class="container">

        <!-- Linha do Tópico principal expandido -->
        <TopicExpanded />
        
        <!-- Linha para com dois Tópicos | pt-4 coloca um espaçamento do componente acima -->
        <div class="row pt-4">
        
          <Topic />
          <Topic />

        </div>

        <!-- Quebra de linha -->
        <div class="row pt-4">
          
          <Topic />
          <Topic />

        </div>

      </div>
    </div>
    
  </div>
</template>

<script>
import TopicExpanded from "@/components/TopicExpanded.vue";
import Topic from "@/components/Topic.vue";

export default {
  components: {
    TopicExpanded,
    Topic
  }
};
</script>

<style>
/* Estilização para deixar os numeros ao da progress bar */ 
.progress-custom {
  display: table;
  width: 100%;
}

.progress-custom .progress{
  margin-bottom: 7px;
  vertical-align: middle;
}

.progress-custom .progress-value{
  display: table-cell;
  width: 1%; 
  padding: 0 4px; /*optionally*/
}
</style>


<!--
<template>
  <HelloWorld />
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  components: {
    HelloWorld
  }
};
</script>
-->