#include <iostream>
 
using namespace std;
 
int main() {
 
    int X, Y, soma = 0;
    
    cin >> X >> Y;
    
    if(X > Y){
        int aux = X;
        X = Y;
        Y = aux;
    }
    
    int i = X+1;
    
    while(i < Y){
        if(abs(i)%2 == 1){
            soma = soma + i;
        }
        i++;
    }
    
    cout << soma << endl;
 
    return 0;
}