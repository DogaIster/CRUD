import { CrudPage } from './app.po';
//protractor dependencies
import {browser, Ptor, wrapDriver} from "protractor";
import { protractor, element, by } from 'protractor';
import { DadCrudComponent } from '../src/app/crud.component';
import webdriver = require("selenium-webdriver");

let sleep = function(){browser.sleep(1000)};

describe('Crud Component', function() {
  it('Should make sure that the file is loaded', () => {
    expect(true).toBe(true);
  });

  it("Should navigate to the right URL", (done) => {
    browser.get('http://localhost:5000');
    console.log("I just want to make sure this test passes so, I know that Protractor is able to start the browser");
    done();
  });
});

describe('Crud Elements', () => {

  it('Should see if the Add Option button is there', () => {
    browser.get('http://localhost:5000');
    expect(element(by.id('selection')).getText()).toEqual('Add Option');
  });

  it('Should click the Add Option', () => {
    browser.get('http://localhost:5000');
    let optionNum = 1;
    if(optionNum){
      let options = element.all(by.tagName('option')).then(function(options) {
        options[optionNum].click();
      });
      expect(element(by.id('selection')).getText()).toEqual('Add Option');
    }
  });

  it('Should fill the boxes and submi t', () => {
  //  let optionNameNew = element(by.id('optionName'));
  //  let optionAttributeNew = element(by.id('optionAttribute'));
  //  let submit = element(by.id('addNewOption'));
    browser.get('http://localhost:5000');

    /*optionNameNew.click();
    optionNameNew.sendKeys('Doga');
    optionAttributeNew.click();
    optionAttributeNew.sendKeys('Awesome');
    submit.click();
*/


    let name =  element(by.id('optionName'));
    name.click();

    let input =  name.element(by.css('input'));
    input.click();
    input.sendKeys('Doga');

    expect(input.getText()).toEqual('Doga');
  });


});



