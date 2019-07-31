import castPath from './castPath.js'
import toKey from './toKey.js'

function _.get(object, path) {
    path = castPath(path, object)

    let index = 0
    const length = path.length

    while (object != null && index < length) {
        object = object[toKey(path[index++])]
    }

    return (index && index == length) ? object : undefined
}

const obj = {
	foo: { bar: 'baz' },
	bar: { foo: 'baz' },
	baz: { nested: { prop: 'foo' } },
};

const obj2 = {
	hello: 'world',
};

const a = _.get(obj, 'foo');
const b = _.get(obj, 'foo.bar');
const c = _.get(obj, 'foo.baz');

const d = _.get(obj, 'bar');
const e = _.get(obj, 'bar.foo');
const f = _.get(obj, 'bar.baz');

const g = _.get(obj, 'baz');
const h = _.get(obj, 'baz.nested.prop');
const i = _.get(obj, 'baz.nested.prop2');
const j = _.get(obj, 'baz.foo');

const k = _.get(obj2, 'hello');
const l = _.get(obj2, 'world');