<template>
	<div class="component">
		<h1>The User Component</h1>
		<p>I'm an awesome User!</p>
		<button @click="changeName">Change my Name</button>
		<!-- <button @click="changeAge">Change my Age</button> -->
    <p>My name is {{ name }} and I am {{ age }} years old.</p>
		<hr>
		<div class="row">
			<div class="col-xs-12 col-sm-6">
				<UserDetail
          :name="name"
          @reset:name="name = $event"
          :age="age"
        ></UserDetail>
			</div>
			<div class="col-xs-12 col-sm-6">
				<UserEdit
          :userAge="age"
          @edit:age="edittedAge"
        ></UserEdit>
			</div>
		</div>
	</div>
</template>

<script>
	import UserDetail from './UserDetail.vue';
	import UserEdit from './UserEdit.vue';

	export default {
		components: {
			UserDetail,
			UserEdit
		},
		data: function() {
			return {
        name: 'Chidinma',
        age: 27,
			};
		},
		methods: {
			changeName() {
        this.name = 'Tobiloba';
      },
      edittedAge() {
        this.age = 25;
      },
		},
	}
</script>

<style scoped>
	div {
		background-color: lightblue;
	}
</style>
