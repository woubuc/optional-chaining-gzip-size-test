const obj = {
	foo: { bar: 'baz' },
	bar: { foo: 'baz' },
	baz: { nested: { prop: 'foo' } },
};

const obj2 = {
	hello: 'world',
};

const a = obj?.foo;
const b = obj?.foo?.bar;
const c = obj?.foo?.baz;

const d = obj?.bar;
const e = obj?.bar?.foo;
const f = obj?.bar?.baz;

const g = obj?.baz;
const h = obj?.baz?.nested?.prop;
const i = obj?.baz?.nested?.prop2;
const j = obj?.baz?.foo;

const k = obj?.hello;
const l = obj?.world;