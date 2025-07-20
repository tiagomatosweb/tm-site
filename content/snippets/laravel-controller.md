```php
class UserController 
{
    public function _invoke(Request $request) 
    {
        $devs = User::query()
            ->where('wants_to_stop_suffering', true)
            ->get();

            
        return UserResource::collection($devs);
    }
}
```


