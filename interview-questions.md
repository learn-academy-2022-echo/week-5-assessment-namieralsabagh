# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a hash in Ruby?

Your answer: A ruby hash is contained sets of key and values. Using CRUD, you can create a hash, read whats in the hash, update the hash or delete unique keys and their valus from the hash. It is similar to a javascript object. 

Researched answer: A Ruby Hash is a collection of key value pairs. The keys are unique and so are their values. Hash values are intially nil until a key is assigned a value. A hash is enumerable so it can be iterated over using a method. An example of a hash is;

car = { :make "BMW", :model "M3", :color "Frozen Portimao Blue Metallic"  }

2. What is a gem?

Your answer: A Ruby Gem is a package manager. It can allow testing your code or change the function in Ruby applications. This is similar to what yarn does for javascript. 

Researched answer: A Ruby Gem is an open source package manager that is a library of code that is utilized and shared by developers. As of right now, there are over 173k different gems and over 109 billion downloads of the different gems. I have used the Ruby Gem RSpec to run tests on code and ActiveRecord as a database mapper. A good resource to find gems is www.rubygems.org. To ensure you have the latest package management framework, run $ gem update --system in the terminal 

3. What is Ruby on Rails?

Your answer: Released August 2004, Ruby on Rails is an open sourced application that allows development on the front and back end of an application. Rails utilizes MVC which stands for Model View Controller. Database is the Model, the content being rendered in UI is View and the controller directs the data on where to go.  

Researched answer: Ruby on Rails is an open sourced application that allows to develop on the front and back end. It utilizes MVC which stands for Model View Controller. Model is the database layer, the content being rendered in UI is View and the controller is the brain of the framework, it directs the data on where to go. Rails is a server-side web application. Rails is utilized by some heavy hitters such as GitHub, hulu and airbnb just to name a few. 

4. What is a relational database? Are there other kinds of databases?

Your answer: A relational database stores data in a table with columns and rows. There are other databases that are not relational. A developer can use this for a multitude of applications such as a user name and their blogpost, a banking user name and the account number that it belongs to. 

Researched answer: A relational database stores data in a table with columns and rows. They are similar to an excel spredsheet. Each row has a primary key that is not created or chosen by the developer. These primary keys can be used as foreign keys in another database to create a relation between shared data. Examples of this would be a user name and their blogpost, a banking user name and the account number that it belongs to. A Non-relational database stores data without tables, rows, primary or foreign keys. An example of this would be a database graph. 

5. What are primary keys? Why are they important?

Your answer: Primary keys are a unique identifier for an instance that is created in a database. A developer cannot come up with the primary key, it is assigned upon the row creation. They are important because they are a unique identifier that cannot be manipulated and can also be used with a relational database by using it as a foreign key. 

Researched answer: Primary keys are a unique identifier for an instance that is created in a database. These keys are assigned automatically and do not need to be manually assigned.  They are important because they are a unique identifier that cannot be manipulated and can also be used with a relational database by using it as a foreign key. They are also important because they can be called on to update specific information in a hash by usings the instance's unique id. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: REST stands for Representational State Transfer. RESTful routes are an attempt to bring the operations that can be applied to an object into HTTP requests.

2. JSON: stands for JavaScript Object Notation and is a data structure modeled after JavaScript but supported by most programming languages.

3. ERB: stands for embedded Ruby. Embedded Ruby is a file structure that allows us to code in HTML and drop Ruby code into the view file.

4. Params: is a method returning a ActionController::Parameters which is a hash of parameters submitted in the request.

5. API: stands for Application Programming Interface and is an application that transmits data in the form of JSON.
