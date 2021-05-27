# apiTake
Is a simple API to redirect 5 C# repositories in descending date order to implement in Take Blip bot and show them the results.

my api: http://api-edson-com.umbler.net/


Basically, the routes this API are:

* **/img** -> How all repositories in GitHub have the same avatar_url for each account, just redirect without parameters

* **/name/:name** -> Just are acetable parametrers that range is <0 to 4>, in order decrescent of updting C# repositories

* **/description/:description** -> The same case above


Obs: I don't use methods to response errors for wrongs https parameters, like 6 or 7 to :name or :description.
