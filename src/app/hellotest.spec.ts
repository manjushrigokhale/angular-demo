describe('HelloTest',()=>{
 let expected='';
let regexmatch=null;
    beforeEach(()=>
{
    expected ="HelloTest";
    regexmatch= new RegExp(/^Hello/);

});
it('checks if HelloTest is HelloTest',()=>expect('HelloTest').toBe(expected));




it('checks if Regex matches with Hello',()=>expect('HelloTest').toMatch(regexmatch))



});