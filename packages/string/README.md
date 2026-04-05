# @js-types-1/string

Lightweight string type checker. Zero dependencies.

## Installation

npm install @js-types-1/string

## Usage

import { type, check } from '@js-types-1/string';

check('hello'); // true
check(42); // false

type; // 'string'
