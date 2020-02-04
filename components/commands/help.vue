<template>
    <div>
        <table>
            <tr v-for="command of $store.getters['commands/get']" :key="command">
                <td>{{ command }} {{ $store.getters[`commands/${command}/params`].reduce((carry, i) => carry += ` ${i}`, '') }}</td>
                <td>{{ $store.getters[`commands/${command}/description`] }}</td>
            </tr>
        </table>
        <div class="mt-4">
            Type a command followed by --help for more information about that command.
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    td {
        min-width: 200px;
    }
</style>
