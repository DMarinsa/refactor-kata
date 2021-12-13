
# refactor-kata
To run the test use ```npm run test```
## Explanation of the done refactors
 Some additional refactors that I'd like to do If I had more time could be:

* Extract tree initialization to constants
	* This has been done to improve readability
* Secure the division by 0
	* To avoid infinity
* Ensure that value if exists is a number
	* To avoid unexpected values
* Move from switch to use guard clausules
	* To improve readability
## Additional refactors

 Some additional refactors that I'd like to do If I had more time could be:

* Change Node to be ES6 class compliant
	* This would improve the Node readability an accessibility of its properties
* Allow both `/` and `÷` operators
	* This would make the accessibility of the methods easier
* Allow both `x` and `*` operators
	* This would make the accessibility of the methods easier
* Extract each operator to an enumerator
	* This would make the accessibility more secure and we would avoid any magic string initialization
* Extract Node into a different module. 
	* This would make the `index.js` and the module itself to fulfill Single responsibility principle
