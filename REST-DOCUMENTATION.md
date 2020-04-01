# blog-rest-api

### Авторизация
url: `/api/users/signin`

method `POST`

body(тело запроса):
```
{
	login: string,
	password: string
}
```

<details>
<summary>Успешный ответ:</summary>

```
status = 200;
body = {
	id: string,
	role: string,
	admin: boolean,
	login: string,
	firstName: string,
	lastName: string,
	patronymic: string,
	avatar: string,
	registrationDate: string,
	email: string
}
```
</details>

<details>
<summary>Если неправильный login или password:</summary>

```
	status = 401;
	body = 'Unauthorized'
```
</details>

<details>
<summary>Если отсутствует login или password:</summary>

```
	status = 400;
	body = 'Bad request'
```
</details>

<details>
<summary>Пример запроса fetch</summary>

```javascript
	const url = 'https://school-blog.ru/api/users/signin';
	const data = { login: 'example', password: 'example' };
	
	try {
	  const response = await fetch(url, {
		method: 'POST',
		body: data
	  });
	  const status = response.status // может быть 200 - 400 - 401

	  const json = await response.json(); // тело ответа
	  console.log('Успех:', JSON.stringify(json));
	} catch (error) {
	  console.error('Ошибка:', error);
	}
```
</details>

<details>
<summary>Пример запроса axios</summary>

```javascript
	const url = 'https://school-blog.ru/api/users/signin';
	const data = { login: 'example', password: 'example' };
	
	try {
	  const response = await axios({
		url,
		method: 'POST',
		data
	  });
	  const status = response.status // может быть 200 - 400 - 401
	  const data = response.data; // тело ответа

	  console.log('Успех:', data);
	} catch (error) {
	  console.error('Ошибка:', error);
	}
```
</details>

<details>
<summary>Пример ответа</summary>

```javascript
	{
		id: "5e62399ae95efa2005d521c9"
		role: "user"
		admin: false
		login: "1234"
		firstName: "123"
		lastName: "123"
		patronymic: ""
		avatar: "avatar-bcdd0fd116278a3bcc3e8b80e56106ee.svg"
		registrationDate: "2020-03-06T11:52:58.344Z"
		email: "1234"
	}
```
</details>

### Регистрация
url: `/api/users/signup/`

method: `POST`

body(тело запроса):
```
(поля помеченные знаком "?" являются НЕ обязательными)
{
	login: string, // должно быть уникальным (не совпадать с другими пользователями)
	email: string,
	firstName: string,
	lastName?: string, // не обязательное поле
	password: string
}
```

<details>
<summary>Успешный ответ:</summary>

```javascript
	status = 200;
	body = {
				id: string,
				role: string,
				admin: boolean,
				login: string,
				firstName: string,
				lastName: string,
				patronymic: string,
				avatar: string,
				registrationDate: string,
				email: string
			}
```
</details>

<details>
<summary>Не успешный ответ (если мы не передали ни одно из полей):</summary>

```javascript
	status = 400;
	body = {
		"login":{"isRequired":true},
		"email":{"isRequired":true},
		"firstName":{"isRequired":true},
		"password":{"isRequired":true}
	}
```
</details>

<details>
<summary>Не успешный ответ (если логин уже занят):</summary>

```javascript
	status = 400;
	body = {
		"login":{"unique":true}
	}
```
</details>

<details>
<summary>Пример запроса fetch</summary>

```javascript
	const url = 'https://school-blog.ru/api/users/signup';
	const data = {
		login: 'example',
		email: 'example',
		password: 'example',
		firstName: 'example'
	};
	
	try {
	  const response = await fetch(url, {
		method: 'POST',
		body: data
	  });
	  const status = response.status // может быть 200 - 400

	  const json = await response.json(); // тело ответа
	  console.log('Успех:', JSON.stringify(json));
	} catch (error) {
	  console.error('Ошибка:', error);
	}
```
</details>

<details>
<summary>Пример запроса axios</summary>

```javascript
	const url = 'https://school-blog.ru/api/users/signup';
	const data = {
		login: 'example',
		email: 'example',
		password: 'example',
		firstName: 'example'
	};

	try {
	  const response = await axios({
		url,
		method: 'POST',
		data
	  });
	  const status = response.status // может быть 200
	  const data = response.data; // тело ответа

	  console.log('Успех:', data);
	} catch (error) {
	  console.error('Ошибка:', error);
	}
```
</details>

<details>
<summary>Пример ответа</summary>

```javascript
	{
		id: "5e62399ae95efa2005d521c9"
		role: "user"
		admin: false
		login: "1234"
		firstName: "123"
		lastName: "123"
		patronymic: ""
		avatar: "avatar-bcdd0fd116278a3bcc3e8b80e56106ee.svg"
		registrationDate: "2020-03-06T11:52:58.344Z"
		email: "1234"
	}
```
</details>

### Аутентификация пользователя
url: `/api/users/auth/`

method: `GET`

<details>
<summary>Успешный ответ если пользователь авторизован(есть кука от бэка):</summary>

```javascript
	status = 200;
	body = {
				id: string,
				role: string,
				admin: boolean,
				login: string,
				firstName: string,
				lastName: string,
				patronymic: string,
				avatar: string,
				registrationDate: string,
				email: string
			}
```
</details>

<details>
<summary>Не успешный ответ (нет куки):</summary>

```javascript
	status = 200;
	body = null
```
</details>

<details>
<summary>Пример запроса fetch</summary>

```javascript
	const url = 'https://school-blog.ru/api/users/auth';
	
	try {
	  const response = await fetch(url, {
		method: 'GET'
	  });
	  const status = response.status // может быть 200

	  const json = await response.json();
	  console.log('Успех:', JSON.stringify(json));
	} catch (error) {
	  console.error('Ошибка:', error);
	}
```
</details>


<details>
<summary>Пример запроса axios</summary>

```javascript
	const url = 'https://school-blog.ru/api/users/auth';

	try {
	  const response = await axios({
		url,
		method: 'GET'
	  });
	  const status = response.status // может быть 200
	  const data = response.data; // тело ответа

	  console.log('Успех:', data);
	} catch (error) {
	  console.error('Ошибка:', error);
	}
```
</details>

<details>
<summary>Пример ответа</summary>

```javascript
	{
		id: "5e62399ae95efa2005d521c9"
		role: "user"
		admin: false
		login: "1234"
		firstName: "123"
		lastName: "123"
		patronymic: ""
		avatar: "avatar-bcdd0fd116278a3bcc3e8b80e56106ee.svg"
		registrationDate: "2020-03-06T11:52:58.344Z"
		email: "1234"
	}
```
</details>

### Выход
url: `/api/users/signout/`

method: `GET`

<details>
<summary>Успешный ответ (пользователь авторизован):</summary>

```javascript
	status = 200;
	body = {
		success: true
	}
```
</details>

<details>
<summary>Не успешный ответ (пользователь НЕ авторизован):</summary>

```javascript
	status = 403;
	body = null
```
</details>

<details>
<summary>Пример запроса fetch</summary>

```javascript
	const url = 'https://school-blog.ru/api/users/signout';
	
	try {
	  const response = await fetch(url, {
		method: 'GET'
	  });
	  const status = response.status // может быть 200

	  const json = await response.json(); // тело ответа
	  console.log('Успех:', JSON.stringify(json));
	} catch (error) {
	  console.error('Ошибка:', error);
	}
```
</details>

<details>
<summary>Пример запроса axios</summary>

```javascript
	const url = 'https://school-blog.ru/api/users/signout';

	try {
	  const response = await axios({
		url,
		method: 'GET'
	  });
	  const status = response.status // может быть 200
	  const data = response.data; // тело ответа

	  console.log('Успех:', data);
	} catch (error) {
	  console.error('Ошибка:', error);
	}
```
</details>

<details>
<summary>Пример ответа</summary>

```javascript
	{ success: true }
```
</details>

### Проверка аутентификации пользователя
url: `/api/users/check-auth/`

method: `GET`

<details>
<summary>Успешный ответ:</summary>

```javascript
	status = 200
	body = true | false // авторизован или не авторизован
```
</details>

<details>
<summary>Пример запроса fetch</summary>

```javascript
	const url = 'https://school-blog.ru/api/users/check-auth';
	
	try {
	  const response = await fetch(url, {
		method: 'GET'
	  });
	  const status = response.status // может быть 200

	  const json = await response.json(); // тело ответа
	  console.log('Успех:', JSON.stringify(json));
	} catch (error) {
	  console.error('Ошибка:', error);
	}
```
</details>

<details>
<summary>Пример запроса axios</summary>

```javascript
	const url = 'https://school-blog.ru/api/users/check-auth';

	try {
	  const response = await axios({
		url,
		method: 'GET'
	  });
	  const status = response.status // может быть 200
	  const data = response.data; // тело ответа

	  console.log('Успех:', data);
	} catch (error) {
	  console.error('Ошибка:', error);
	}
```
</details>

<details>
<summary>Пример ответа</summary>

```javascript
	true
```
</details>

### получение списка пользователей
url: `/api/users`

method: `GET`

query-string (GET параметры запроса):

```
	(поля помеченные знаком "?" являются НЕ обязательными)
	filter?: {
    		 firstName?: string,
    		 firstName?: string,
    		 patronymic?: string,
    		 login?: string,
    		 email?: string
      	},
	offset?: number,
	offsetStep?: number
```

<details>
<summary>Успешный ответ:</summary>

```javascript
	status = 200
	body = [
		{
			id: string,
			login: string,
			email: string,
			firstName: string,
			lastName: string,
			patronymic: string,
			avatar: string,
			registrationDate: string,
			role: string,
			admin: boolean
		}
   ]
```
</details>

<details>
<summary>Пример запроса fetch</summary>

```javascript
	const url = 'https://school-blog.ru/api/users';
	
	try {
	  const response = await fetch(url, {
		method: 'GET'
	  });
	  const status = response.status // может быть 200

	  const json = await response.json();
	  console.log('Успех:', JSON.stringify(json));
	} catch (error) {
	  console.error('Ошибка:', error);
	}
```
</details>

<details>
<summary>Пример запроса axios</summary>

```javascript
	const url = 'https://school-blog.ru/api/users';

	try {
	  const response = await axios({
		url,
		method: 'GET',
		params: { // query-string параметри GET запроса
			filter: {
				login: '123'
			},
			offset: 10,
			offsetStep: 30
		}
	  });
	  const status = response.status // может быть 200
	  const data = response.data; // тело ответа

	  console.log('Успех:', data);
	} catch (error) {
	  console.error('Ошибка:', error);
	}
```
</details>

<details>
<summary>Пример ответа</summary>

```javascript
	[
		{"id":"5e7376a32c752801c3ea8877","role":"user","admin":false,"login":"12","firstName":"12","lastName":"","patronymic":"","avatar":"avatar-da5c6176b511cbfc5e34873583bf6d18.svg","registrationDate":"2020-03-19T13:41:55.418Z","email":"12"},
		{"id":"5e623938e95efa2005d521c7","role":"user","admin":false,"login":"123","firstName":"123","lastName":"123","patronymic":"","avatar":"avatar-d526163b7682ed0a3fe0fe40e1ad425e.svg","registrationDate":"2020-03-06T11:51:19.179Z","email":"123"},
		{"id":"5e62399ae95efa2005d521c9","role":"user","admin":false,"login":"1234","firstName":"123","lastName":"123","patronymic":"","avatar":"avatar-bcdd0fd116278a3bcc3e8b80e56106ee.svg","registrationDate":"2020-03-06T11:52:58.344Z","email":"1234"},
		{"id":"5e78038e2c752801c3ea888b","role":"user","admin":false,"login":"12w","firstName":"1","lastName":"1","patronymic":"","avatar":"avatar-758699ec5254d1e1b090860cfcc40e3d.svg","registrationDate":"2020-03-23T00:32:14.177Z","email":"12w"},
		{"id":"5e623ac1e95efa2005d521cb","role":"user","admin":false,"login":"Alex","firstName":"1234","lastName":"","patronymic":"","avatar":"avatar-cd0a8414100aac4e4e9148ebf63477d1.svg","registrationDate":"2020-03-06T11:57:52.999Z","email":"Alex"},
	]
```
</details>

### Получение пользователя по id
url: `/api/users/:id`

method: `GET`

params (Параметры в урле запроса):
```
	id: string
```

<details>
<summary>Успешный ответ:</summary>

```javascript
	status = 200
	body = {
		id: string,
		login: string,
		email: string,
		firstName: string,
		lastName: string,
		patronymic: string,
		avatar: string,
		registrationDate: string,
		role: string,
		admin: boolean
	}
```
</details>

<details>
<summary>Пример запроса fetch</summary>

```javascript
	const url = 'http://school-blog.ru/api/users/5e7376a32c752801c3ea8877';
	
	try {
	  const response = await fetch(url, {
		method: 'GET'
	  });
	  const status = response.status // может быть 200

	  const json = await response.json();
	  console.log('Успех:', JSON.stringify(json));
	} catch (error) {
	  console.error('Ошибка:', error);
	}
```
</details>

<details>
<summary>Пример запроса axios</summary>

```javascript
	const url = 'https://school-blog.ru/api/users/5e7376a32c752801c3ea8877';

	try {
	  const response = await axios({
		url,
		method: 'GET'
	  });
	  const status = response.status // может быть 200
	  const data = response.data; // тело ответа

	  console.log('Успех:', data);
	} catch (error) {
	  console.error('Ошибка:', error);
	}
```
</details>

<details>
<summary>Пример ответа</summary>

```javascript
	{
		"id":"5e7376a32c752801c3ea8877",
		"role":"user",
		"admin":false,
		"login":"12",
		"firstName":"12",
		"lastName":"",
		"patronymic":"",
		"avatar":"avatar-da5c6176b511cbfc5e34873583bf6d18.svg",
		"registrationDate":"2020-03-19T13:41:55.418Z",
		"email":"12",
		"postsCount":3,
		"likesCount":0,
		"dislikesCount":0
	}
```
</details>

### Изменение данных пользователя
url: `/api/users/:id`

method: `PUT`

data(тело запроса):
```
	{
        firstName: string,
        lastName: string,
        patronymic: string,
        birthday: Date
  	}
```

<details>
<summary>Успешный ответ:</summary>

```javascript
	status = 200
	body = {
		id: string,
		login: string,
		email: string,
		firstName: string,
		lastName: string,
		patronymic: string,
		avatar: string,
		registrationDate: string,
		role: string,
		admin: boolean,
		birthday: string,
		postsCount: number,
		likesCount: number,
		dislikesCount: number
	}
```
</details>

<details>
<summary>Пример запроса fetch</summary>

```javascript
	const url = 'http://school-blog.ru/api/users/5e7376a32c752801c3ea8877';
	const data = {
		firstName: 'newFirstName',
		lastName: 'newLastName',
		patronymic: 'newPatronymic,
		birthday: (new Date()).toJSON()
	};

	try {
	  const response = await fetch(url, {
		method: 'PUT',
		body: data
	  });
	  const status = response.status // может быть 200

	  const json = await response.json();
	  console.log('Успех:', JSON.stringify(json));
	} catch (error) {
	  console.error('Ошибка:', error);
	}
```
</details>

<details>
<summary>Пример запроса axios</summary>

```javascript
	const url = 'https://school-blog.ru/api/users/5e7376a32c752801c3ea8877';
	const data = {
		firstName: 'newFirstName',
		lastName: 'newLastName',
		patronymic: 'newPatronymic,
		birthday: (new Date()).toJSON()
	};

	try {
	  const response = await axios({
		url,
		method: 'PUT',
		data
	  });
	  const status = response.status // может быть 200
	  const data = response.data; // тело ответа

	  console.log('Успех:', data);
	} catch (error) {
	  console.error('Ошибка:', error);
	}
```
</details>

<details>
<summary>Пример ответа</summary>

```javascript
	{
		"id":"5e7376a32c752801c3ea8877",
		"role":"user",
		"admin":false,
		"login":"12",
		"firstName":"newFirstName",
		"lastName":"newLastName",
		"patronymic":"newPatronymic",
		"avatar":"avatar-da5c6176b511cbfc5e34873583bf6d18.svg",
		"registrationDate":"2020-03-19T13:41:55.418Z",
		"birthday": "2020-03-19T13:41:55.418Z",
		"email":"12",
		"postsCount":3,
		"likesCount":0,
		"dislikesCount":0
	}
```
</details>

### Проверка существования пользователя
url: `/api/users/check-exists/`

method: `POST`

data(тело запроса):
```
{
	login: string
}
```

<details>
<summary>Успешный ответ:</summary>

```javascript
	status = 200
	body = {
	 exists: boolean
	}
```
</details>


<details>
<summary>Пример запроса fetch</summary>

```javascript
	const url = 'http://school-blog.ru/api/users/check-exists';
	
	try {
	  const response = await fetch(url, {
		method: 'GET'
	  });
	  const status = response.status // может быть 200

	  const json = await response.json();
	  console.log('Успех:', JSON.stringify(json));
	} catch (error) {
	  console.error('Ошибка:', error);
	}
```
</details>

<details>
<summary>Пример запроса axios</summary>

```javascript
	const url = 'https://school-blog.ru/api/users/check-exists';

	try {
	  const response = await axios({
		url,
		method: 'GET'
	  });
	  const status = response.status // может быть 200
	  const data = response.data; // тело ответа

	  console.log('Успех:', data);
	} catch (error) {
	  console.error('Ошибка:', error);
	}
```
</details>

<details>
<summary>Пример ответа</summary>

```javascript
	{
		exists: true
	}
```
</details>


### Изменение пароля пользователя
path: `/api/users/change/password/`

method: `PUT`

data(тело запроса):
```
	{
		currentPassword: string, // минимальная длинна = 3
		newPassword: string // минимальная длинна = 3
	}
```

<details>
<summary>Успешный ответ (пользователь авторизован):</summary>

```javascript
	status = 200
	body = { success: true }
```
</details>

<details>
<summary>Не успешный ответ (пользователь не авторизован):</summary>

```javascript
	status = 403
	body = 'Unauthorized'
```
</details>

<details>
<summary>Не успешный ответ (currentPassword !== password):</summary>

```javascript
	status = 200
	body = { error: true }
```
</details>

<details>
<summary>Не успешный ответ (не переданы параметры):</summary>

```javascript
	status = 400
	body = {
		"currentPassword": {"isRequired":true},
		"newPassword": {"isRequired":true},
	}

	или

	body = {
		"currentPassword": {"minLength":3},
		"newPassword": {"minLength":3},
	}
```
</details>

<details>
<summary>Пример запроса fetch</summary>

```javascript
	const url = 'http://school-blog.ru/api/users/change/password';
	const data = {
		currentPassword: '1234',
		newPassword: '12345'
	};
	
	try {
	  const response = await fetch(url, {
		method: 'PUT',
		body: data
	  });
	  const status = response.status; // может быть 200 | 403 | 400

	  const json = await response.json();
	  console.log('Успех:', JSON.stringify(json));
	} catch (error) {
	  console.error('Ошибка:', error);
	}
```
</details>

<details>
<summary>Пример запроса axios</summary>

```javascript
	const url = 'https://school-blog.ru/api/users/change/password';
	const data = {
		currentPassword: '1234',
		newPassword: '12345'
	};

	try {
	  const response = await axios({
		url,
		method: 'PUT',
		data
	  });
	  const status = response.status; // может быть 200
	  const data = response.data; // тело ответа

	  console.log('Успех:', data);
	} catch (error) {
	  console.error('Ошибка:', error);
	}
```
</details>

<details>
<summary>Пример ответа</summary>

```javascript
	{ success: true }
```
</details>

### Получение списка постов
url: `/api/posts/`

method: `GET`

query-string (GET параметры запроса):
```
	(поля помеченные знаком "?" являются НЕ обязательными)
	authorId?: string
	search?: string,
	sort?: 'best' | 'popular' | 'new'
	offset?: number,
	offsetStep?: number
```

<details>
<summary>Успешный ответ:</summary>\

```javascript
	status = 200
	body = [
		{
			id: string,
			title: string,
			content: string,
			authorId: string,
			date: string,
			author: Object,
			relatedLikes: string[], // в массиве приходит id пользователя, если он поставил лайк
			relatedDislikes: string[], // в массиве приходит id пользователя, если он поставил дизлайк
			viewsCount: number,
			likesCount: number,
			dislikesCount: number,
			rating: number
		}
   ]
```
</details>

<details>
<summary>Пример запроса fetch</summary>

```javascript
	const url = 'http://school-blog.ru/api/posts';
	
	try {
	  const response = await fetch(url, {
		method: 'GET'
	  });
	  const status = response.status; // может быть 200

	  const json = await response.json();
	  console.log('Успех:', JSON.stringify(json));
	} catch (error) {
	  console.error('Ошибка:', error);
	}
```
</details>

<details>
<summary>Пример запроса axios</summary>

```javascript
	const url = 'https://school-blog.ru/api/posts';

	try {
	  const response = await axios({
		url,
		method: 'GET',
		params: { // query-string параметри GET запроса
			sort?: 'best'
			offset: 0,
			offsetStep: 30
		}
	  });
	  const status = response.status; // может быть 200
	  const data = response.data; // тело ответа

	  console.log('Успех:', data);
	} catch (error) {
	  console.error('Ошибка:', error);
	}
```
</details>

<details>
<summary>Пример ответа</summary>

```javascript
	[
		{"viewsCount":8,"likesCount":0,"dislikesCount":0,"rating":0,"_id":"5e778ccd2c752801c3ea8888","title":"qwertyuiopoiuytrew","content":"rtyui\nvg\ncgvh\nvgh\nv\nhv\nh\nv","authorId":"5e7376a32c752801c3ea8877","id":"5e778ccd2c752801c3ea8889","date":"2020-03-22T16:05:33.017Z","postNumber":11,"__v":0,"author":{"id":"5e7376a32c752801c3ea8877","role":"user","admin":false,"login":"12","firstName":"12","lastName":"","patronymic":"","avatar":"avatar-da5c6176b511cbfc5e34873583bf6d18.svg","registrationDate":"2020-03-19T13:41:55.418Z","email":"12"},"likes":[],"dislikes":[]},
		{"viewsCount":2,"likesCount":0,"dislikesCount":0,"rating":0,"_id":"5e778bf12c752801c3ea8886","title":"asecd","content":"aesdcvaefsdvc eaf","authorId":"5e7376a32c752801c3ea8877","id":"5e778bf12c752801c3ea8887","date":"2020-03-22T16:01:53.650Z","postNumber":10,"__v":0,"author":{"id":"5e7376a32c752801c3ea8877","role":"user","admin":false,"login":"12","firstName":"12","lastName":"","patronymic":"","avatar":"avatar-da5c6176b511cbfc5e34873583bf6d18.svg","registrationDate":"2020-03-19T13:41:55.418Z","email":"12"},"likes":[],"dislikes":[]},
		{"viewsCount":1,"likesCount":0,"dislikesCount":0,"rating":0,"_id":"5e778b8c2c752801c3ea8884","title":"12","authorId":"5e7376a32c752801c3ea8877","id":"5e778b8c2c752801c3ea8885","date":"2020-03-22T16:00:12.871Z","postNumber":9,"__v":0,"author":{"id":"5e7376a32c752801c3ea8877","role":"user","admin":false,"login":"12","firstName":"12","lastName":"","patronymic":"","avatar":"avatar-da5c6176b511cbfc5e34873583bf6d18.svg","registrationDate":"2020-03-19T13:41:55.418Z","email":"12"},"likes":[],"dislikes":[]},
		{"viewsCount":1,"likesCount":0,"dislikesCount":0,"rating":0,"_id":"5e71d2452c752801c3ea8870","title":"gfhn","content":"dgh","authorId":"5e62399ae95efa2005d521c9","id":"5e71d2452c752801c3ea8871","date":"2020-03-18T07:48:21.499Z","postNumber":8,"__v":0,"author":{"id":"5e62399ae95efa2005d521c9","role":"user","admin":false,"login":"1234","firstName":"123","lastName":"123","patronymic":"","avatar":"avatar-bcdd0fd116278a3bcc3e8b80e56106ee.svg","registrationDate":"2020-03-06T11:52:58.344Z","email":"1234"},"likes":[],"dislikes":[]},
		{"viewsCount":1,"likesCount":0,"dislikesCount":0,"rating":0,"_id":"5e7115142c752801c3ea886e","title":"title","content":"qwertjhgfdsgh hjhgsfgdfh dgfhjmhf dthfjhgh","authorId":"5e62399ae95efa2005d521c9","id":"5e7115142c752801c3ea886f","date":"2020-03-17T18:21:08.316Z","postNumber":7,"__v":0,"author":{"id":"5e62399ae95efa2005d521c9","role":"user","admin":false,"login":"1234","firstName":"123","lastName":"123","patronymic":"","avatar":"avatar-bcdd0fd116278a3bcc3e8b80e56106ee.svg","registrationDate":"2020-03-06T11:52:58.344Z","email":"1234"},"likes":[],"dislikes":[]}
	]
```
</details>

### Создание поста
url: `/api/posts/`

method: `POST`

body(тело запроса):
```
{
	title: string,
	content: string
}
```

<details>
<summary>Успешный ответ:</summary>

```javascript
	status = 200
	body = {
		id: string,
		title: string,
		content: string,
		authorId: string,
		date: string,
		author: Object,
		relatedLikes: string[], // в массиве приходит id пользователя, если он поставил лайк
		relatedDislikes: string[], // в массиве приходит id пользователя, если он поставил дизлайк
		viewsCount: number,
		likesCount: number,
		dislikesCount: number,
		rating: number
	}
		
```
</details>

<details>
<summary>Не успешный ответ (пользователь не авторизован):</summary>

```javascript
	status = 403
	body = null	
```
</details>

<details>
<summary>Пример запроса fetch</summary>

```javascript
	const url = 'http://school-blog.ru/api/posts';
	const data = {
		title: 'My post',
		content: 'hello world'
	};

	try {
	  const response = await fetch(url, {
		method: 'POST',
		body: data
	  });
	  const status = response.status // может быть 200 | 403

	  const json = await response.json();
	  console.log('Успех:', JSON.stringify(json));
	} catch (error) {
	  console.error('Ошибка:', error);
	}
```
</details>

<details>
<summary>Пример запроса axios</summary>

```javascript
	const url = 'https://school-blog.ru/api/posts';
	const data = {
		title: 'My post',
		content: 'hello world'
	};

	try {
	  const response = await axios({
		url,
		method: 'POST',
		data
	  });
	  const status = response.status // может быть 200
	  const data = response.data; // тело ответа

	  console.log('Успех:', data);
	} catch (error) {
	  console.error('Ошибка:', error);
	}
```
</details>

<details>
<summary>Пример ответа</summary>

```javascript
	{
	"viewsCount":0,
	"likesCount":0,
	"dislikesCount":0,
	"rating":0,
	"_id":"5e778ccd2c752801c3ea8888",
	"title":"My post",
	"content":"hello world",
	"authorId":"5e7376a32c752801c3ea8877",
	"id":"5e778ccd2c752801c3ea8889",
	"date":"2020-03-22T16:05:33.017Z",
	"postNumber":11,
	"__v":0,
	"author":{
		"id":"5e7376a32c752801c3ea8877",
		"role":"user",
		"admin":false,
		"login":"12",
		"firstName":"12",
		"lastName":"",
		"patronymic":"",
		"avatar":"avatar-da5c6176b511cbfc5e34873583bf6d18.svg",
		"registrationDate":"2020-03-19T13:41:55.418Z",
		"email":"12"
		},
	"relatedLikes":[],
	"relatedDislikes":[]
	},
```
</details>

### Получение поста
url: `/api/posts/:id`

method: `GET`

params (Параметры в урле запроса):
```
	id: string
```

<details>
<summary>Успешный ответ:</summary>

```javascript
	status = 200
	body = {
		id: string,
		title: string,
		content: string,
		authorId: string,
		date: string,
		author: Object,
		relatedLikes: string[], // в массиве приходит id пользователя, если он поставил лайк
		relatedDislikes: string[], // в массиве приходит id пользователя, если он поставил дизлайк
		viewsCount: number,
		likesCount: number,
		dislikesCount: number,
		rating: number
	}
		
```
</details>

<details>
<summary>Пример запроса fetch</summary>

```javascript
	const url = 'http://school-blog.ru/api/posts/5e778ccd2c752801c3ea8888';

	try {
	  const response = await fetch(url, {
		method: 'GET'
	  });
	  const status = response.status; // может быть 200 | 403

	  const json = await response.json();
	  console.log('Успех:', JSON.stringify(json));
	} catch (error) {
	  console.error('Ошибка:', error);
	}
```
</details>


<details>
<summary>Пример запроса axios</summary>

```javascript
	const url = 'https://school-blog.ru/api/posts/5e778ccd2c752801c3ea8888';

	try {
	  const response = await axios({
		url,
		method: 'GET'
	  });
	  const status = response.status; // может быть 200
	  const data = response.data; // тело ответа

	  console.log('Успех:', data);
	} catch (error) {
	  console.error('Ошибка:', error);
	}
```
</details>

<details>
<summary>Пример ответа</summary>

```javascript
	{
	"viewsCount":0,
	"likesCount":0,
	"dislikesCount":0,
	"rating":0,
	"_id":"5e778ccd2c752801c3ea8888",
	"title":"My post",
	"content":"hello world",
	"authorId":"5e7376a32c752801c3ea8877",
	"id":"5e778ccd2c752801c3ea8889",
	"date":"2020-03-22T16:05:33.017Z",
	"postNumber":11,
	"__v":0,
	"author":{
		"id":"5e7376a32c752801c3ea8877",
		"role":"user",
		"admin":false,
		"login":"12",
		"firstName":"12",
		"lastName":"",
		"patronymic":"",
		"avatar":"avatar-da5c6176b511cbfc5e34873583bf6d18.svg",
		"registrationDate":"2020-03-19T13:41:55.418Z",
		"email":"12"
		},
	"relatedLikes":[],
	"relatedDislikes":[]
	},
```
</details>

### Удаление поста
url: `/api/posts/:id`

method: `DELETE`

params (Параметры в урле запроса):
```
	id: string
```

<details>
<summary>Успешный ответ:</summary>

```javascript
	status = 200
	body = {
		id: string,
		removed: 'success'
	}
		
```
</details>

<details>
<summary>Пример запроса fetch</summary>

```javascript
	const url = 'http://school-blog.ru/api/posts/5e778ccd2c752801c3ea8888';

	try {
	  const response = await fetch(url, {
		method: 'DELETE'
	  });
	  const status = response.status; // может быть 200 | 403

	  const json = await response.json();
	  console.log('Успех:', JSON.stringify(json));
	} catch (error) {
	  console.error('Ошибка:', error);
	}
```
</details>


<details>
<summary>Пример запроса axios</summary>

```javascript
	const url = 'https://school-blog.ru/api/posts/5e778ccd2c752801c3ea8888';

	try {
	  const response = await axios({
		url,
		method: 'DELETE'
	  });
	  const status = response.status; // может быть 200
	  const data = response.data; // тело ответа

	  console.log('Успех:', data);
	} catch (error) {
	  console.error('Ошибка:', error);
	}
```
</details>

<details>
<summary>Пример ответа</summary>

```javascript
	{
		id: '5e778ccd2c752801c3ea8888',
		removed: 'success'
	}
```
</details>


### Изменение поста
url: `/api/posts/:id`

method: `PUT`

params (Параметры в урле запроса):
```
	id: string
```
data (Тело запроса):
```js
{
	title: string,
	content: string
}
```

<details>
<summary>Успешный ответ:</summary>

```javascript
	status = 200
	body = {
		id: string,
		title: string,
		content: string,
		authorId: string,
		date: string,
		author: Object,
		relatedLikes: string[],  // в массиве приходит id пользователя, если он поставил лайк
		relatedDislikes: string[],  // в массиве приходит id пользователя, если он поставил дизлайк
		viewsCount: number,
		likesCount: number,
		dislikesCount: number,
		rating: number
	}
		
```
</details>

<details>
<summary>Пример запроса fetch</summary>

```javascript
	const url = 'http://school-blog.ru/api/posts/5e778ccd2c752801c3ea8888';
	const data = {
	  title: 'New titile',
	  content: 'New content'
	};

	try {
	  const response = await fetch(url, {
		method: 'PUT',
		body: data
	  });
	  const status = response.status; // может быть 200 | 403

	  const json = await response.json();
	  console.log('Успех:', JSON.stringify(json));
	} catch (error) {
	  console.error('Ошибка:', error);
	}
```
</details>

<details>
<summary>Пример запроса axios</summary>

```javascript
	const url = 'https://school-blog.ru/api/posts/5e778ccd2c752801c3ea8888';
	const data = {
	  title: 'New titile',
	  content: 'New content'
	};

	try {
	  const response = await axios({
		url,
		method: 'PUT',
		data
	  });
	  const status = response.status; // может быть 200
	  const data = response.data; // тело ответа

	  console.log('Успех:', data);
	} catch (error) {
	  console.error('Ошибка:', error);
	}
```
</details>

<details>
<summary>Пример ответа</summary>

```javascript
	{
		"viewsCount":0,
		"likesCount":0,
		"dislikesCount":0,
		"rating":0,
		"_id":"5e778ccd2c752801c3ea8888",
		"title":"New titile",
		"content":"New content",
		"authorId":"5e7376a32c752801c3ea8877",
		"id":"5e778ccd2c752801c3ea8888",
		"date":"2020-03-22T16:05:33.017Z",
		"postNumber":11,
		"__v":0,
		"author":{
			"id":"5e7376a32c752801c3ea8877",
			"role":"user",
			"admin":false,
			"login":"12",
			"firstName":"12",
			"lastName":"",
			"patronymic":"",
			"avatar":"avatar-da5c6176b511cbfc5e34873583bf6d18.svg",
			"registrationDate":"2020-03-19T13:41:55.418Z",
			"email":"12"
			},
		"relatedLikes":[],
		"relatedDislikes":[]
	}
```
</details>


### Добавление лайка посту
url: `/api/posts/like/:id`

method: `PUT`

params (Параметры в урле запроса):
```
	id: string
```


<details>
<summary>Успешный ответ:</summary>

```javascript
	status = 200
	body = {
		id: string,
		title: string,
		content: string,
		authorId: string,
		date: string,
		author: Object,
		relatedLikes: string[],
		relatedDislikes: string[],
		viewsCount: number,
		likesCount: number,
		dislikesCount: number,
		rating: number
	}
		
```
</details>


<details>
<summary>Пример запроса fetch</summary>

```javascript
	const url = 'http://school-blog.ru/api/posts/like/5e778ccd2c752801c3ea8888';

	try {
	  const response = await fetch(url, {
		method: 'PUT'
	  });
	  const status = response.status; // может быть 200

	  const json = await response.json();
	  console.log('Успех:', JSON.stringify(json));
	} catch (error) {
	  console.error('Ошибка:', error);
	}
```
</details>

<details>
<summary>Пример запроса axios</summary>

```javascript
	const url = 'https://school-blog.ru/api/posts/like/5e778ccd2c752801c3ea8888';

	try {
	  const response = await axios({
		url,
		method: 'PUT'
	  });
	  const status = response.status; // может быть 200
	  const data = response.data; // тело ответа

	  console.log('Успех:', data);
	} catch (error) {
	  console.error('Ошибка:', error);
	}
```
</details>

<details>
<summary>Пример ответа</summary>

```javascript
	{
		"viewsCount":0,
		"likesCount":0,
		"dislikesCount":0,
		"rating":0,
		"_id":"5e778ccd2c752801c3ea8888",
		"title":"New titile",
		"content":"New content",
		"authorId":"5e7376a32c752801c3ea8877",
		"id":"5e778ccd2c752801c3ea8888",
		"date":"2020-03-22T16:05:33.017Z",
		"postNumber":11,
		"__v":0,
		"author":{
			"id":"5e7376a32c752801c3ea8877",
			"role":"user",
			"admin":false,
			"login":"12",
			"firstName":"12",
			"lastName":"",
			"patronymic":"",
			"avatar":"avatar-da5c6176b511cbfc5e34873583bf6d18.svg",
			"registrationDate":"2020-03-19T13:41:55.418Z",
			"email":"12"
			},
		"relatedLikes":[],
		"relatedDislikes":[]
	}
```
</details>


### Добавление дизлайка посту
url: `/api/posts/dislike/:id`

method: `PUT`

params (Параметры в урле запроса):
```
	id: string
```


<details>
<summary>Успешный ответ:</summary>

```javascript
	status = 200
	body = {
		id: string,
		title: string,
		content: string,
		authorId: string,
		date: string,
		author: Object,
		relatedLikes: string[],  // в массиве приходит id пользователя, если он поставил лайк
		relatedDislikes: string[],  // в массиве приходит id пользователя, если он поставил дизлайк
		viewsCount: number,
		likesCount: number,
		dislikesCount: number,
		rating: number
	}
		
```
</details>


<details>
<summary>Пример запроса fetch</summary>

```javascript
	const url = 'http://school-blog.ru/api/posts/dislike/5e778ccd2c752801c3ea8888';

	try {
	  const response = await fetch(url, {
		method: 'PUT'
	  });
	  const status = response.status; // может быть 200

	  const json = await response.json();
	  console.log('Успех:', JSON.stringify(json));
	} catch (error) {
	  console.error('Ошибка:', error);
	}
```
</details>

<details>
<summary>Пример запроса axios</summary>

```javascript
	const url = 'https://school-blog.ru/api/posts/dislike/5e778ccd2c752801c3ea8888';

	try {
	  const response = await axios({
		url,
		method: 'PUT'
	  });
	  const status = response.status; // может быть 200
	  const data = response.data; // тело ответа

	  console.log('Успех:', data);
	} catch (error) {
	  console.error('Ошибка:', error);
	}
```
</details>

<details>
<summary>Пример ответа</summary>

```javascript
	{
		"viewsCount":0,
		"likesCount":0,
		"dislikesCount":0,
		"rating":0,
		"_id":"5e778ccd2c752801c3ea8888",
		"title":"New titile",
		"content":"New content",
		"authorId":"5e7376a32c752801c3ea8877",
		"id":"5e778ccd2c752801c3ea8888",
		"date":"2020-03-22T16:05:33.017Z",
		"postNumber":11,
		"__v":0,
		"author":{
			"id":"5e7376a32c752801c3ea8877",
			"role":"user",
			"admin":false,
			"login":"12",
			"firstName":"12",
			"lastName":"",
			"patronymic":"",
			"avatar":"avatar-da5c6176b511cbfc5e34873583bf6d18.svg",
			"registrationDate":"2020-03-19T13:41:55.418Z",
			"email":"12"
			},
		"relatedLikes":[],
		"relatedDislikes":[]
	}
```
</details>

### Получение списка избранных постов
url: `/api/posts/favourite/`

method: `GET`

query-string (GET параметры запроса):
```
	(поля помеченные знаком "?" являются НЕ обязательными)
	authorId?: string
	search?: string,
	offset?: number,
	offsetStep?: number
```

<details>
<summary>Успешный ответ:</summary>\

```javascript
	status = 200
	body = [
		{
			id: string,
			title: string,
			content: string,
			authorId: string,
			date: string,
			author: Object,
			relatedLikes: string[],
			relatedDislikes: string[],
			viewsCount: number,
			likesCount: number,
			dislikesCount: number,
			rating: number
		}
   ]
```
</details>

<details>
<summary>Пример запроса fetch</summary>

```javascript
	const url = 'http://school-blog.ru/api/posts/favourite';
	
	try {
	  const response = await fetch(url, {
		method: 'GET'
	  });
	  const status = response.status; // может быть 200

	  const json = await response.json();
	  console.log('Успех:', JSON.stringify(json));
	} catch (error) {
	  console.error('Ошибка:', error);
	}
```
</details>

<details>
<summary>Пример запроса axios</summary>

```javascript
	const url = 'https://school-blog.ru/api/posts/favourite';

	try {
	  const response = await axios({
		url,
		method: 'GET',
		params: { // query-string параметри GET запроса
			sort?: 'best',
			offset: 0,
			offsetStep: 30
		}
	  });
	  const status = response.status; // может быть 200
	  const data = response.data; // тело ответа

	  console.log('Успех:', data);
	} catch (error) {
	  console.error('Ошибка:', error);
	}
```
</details>

<details>
<summary>Пример ответа</summary>

```javascript
	[
		{"viewsCount":8,"likesCount":0,"dislikesCount":0,"rating":0,"_id":"5e778ccd2c752801c3ea8888","title":"qwertyuiopoiuytrew","content":"rtyui\nvg\ncgvh\nvgh\nv\nhv\nh\nv","authorId":"5e7376a32c752801c3ea8877","id":"5e778ccd2c752801c3ea8889","date":"2020-03-22T16:05:33.017Z","postNumber":11,"__v":0,"author":{"id":"5e7376a32c752801c3ea8877","role":"user","admin":false,"login":"12","firstName":"12","lastName":"","patronymic":"","avatar":"avatar-da5c6176b511cbfc5e34873583bf6d18.svg","registrationDate":"2020-03-19T13:41:55.418Z","email":"12"},"likes":[],"dislikes":[]},
		{"viewsCount":2,"likesCount":0,"dislikesCount":0,"rating":0,"_id":"5e778bf12c752801c3ea8886","title":"asecd","content":"aesdcvaefsdvc eaf","authorId":"5e7376a32c752801c3ea8877","id":"5e778bf12c752801c3ea8887","date":"2020-03-22T16:01:53.650Z","postNumber":10,"__v":0,"author":{"id":"5e7376a32c752801c3ea8877","role":"user","admin":false,"login":"12","firstName":"12","lastName":"","patronymic":"","avatar":"avatar-da5c6176b511cbfc5e34873583bf6d18.svg","registrationDate":"2020-03-19T13:41:55.418Z","email":"12"},"likes":[],"dislikes":[]},
		{"viewsCount":1,"likesCount":0,"dislikesCount":0,"rating":0,"_id":"5e778b8c2c752801c3ea8884","title":"12","authorId":"5e7376a32c752801c3ea8877","id":"5e778b8c2c752801c3ea8885","date":"2020-03-22T16:00:12.871Z","postNumber":9,"__v":0,"author":{"id":"5e7376a32c752801c3ea8877","role":"user","admin":false,"login":"12","firstName":"12","lastName":"","patronymic":"","avatar":"avatar-da5c6176b511cbfc5e34873583bf6d18.svg","registrationDate":"2020-03-19T13:41:55.418Z","email":"12"},"likes":[],"dislikes":[]},
		{"viewsCount":1,"likesCount":0,"dislikesCount":0,"rating":0,"_id":"5e71d2452c752801c3ea8870","title":"gfhn","content":"dgh","authorId":"5e62399ae95efa2005d521c9","id":"5e71d2452c752801c3ea8871","date":"2020-03-18T07:48:21.499Z","postNumber":8,"__v":0,"author":{"id":"5e62399ae95efa2005d521c9","role":"user","admin":false,"login":"1234","firstName":"123","lastName":"123","patronymic":"","avatar":"avatar-bcdd0fd116278a3bcc3e8b80e56106ee.svg","registrationDate":"2020-03-06T11:52:58.344Z","email":"1234"},"likes":[],"dislikes":[]},
		{"viewsCount":1,"likesCount":0,"dislikesCount":0,"rating":0,"_id":"5e7115142c752801c3ea886e","title":"title","content":"qwertjhgfdsgh hjhgsfgdfh dgfhjmhf dthfjhgh","authorId":"5e62399ae95efa2005d521c9","id":"5e7115142c752801c3ea886f","date":"2020-03-17T18:21:08.316Z","postNumber":7,"__v":0,"author":{"id":"5e62399ae95efa2005d521c9","role":"user","admin":false,"login":"1234","firstName":"123","lastName":"123","patronymic":"","avatar":"avatar-bcdd0fd116278a3bcc3e8b80e56106ee.svg","registrationDate":"2020-03-06T11:52:58.344Z","email":"1234"},"likes":[],"dislikes":[]}
	]
```
</details>
