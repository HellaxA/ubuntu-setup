---
path: "/some-javascript"
title: "some javascript"
order: "72A"
section: "Misc Content"
description: "This is the first exercise to try out."
---

// Delete the description.
// That seems slow right?
// <count>Delete
// try typing, with your cursor on the first line the following.
// 7dd
// What does that mean about j and k?
// But we have a problem down we?
function foo(a, b, c) {
	switch (a) {
		case 1: 
			return b + c;
			break;
		default:
			return a * b + c;
	}
	
	throw new Error("This should never happen");
}

if (true) {
	console.log(foo(1, 5, 7));
}

if (false) {
	console.log(foo(1, 5, 7));
}

if (false || true) {
	console.log(foo(1, 5, 7));
}

foo(
    foo(1),
    foo(2),
    foo(3))

foo(
    foo(4),
    foo(5),
    foo(6))

foo(
    foo(7),
    foo(8),
    foo(9))
