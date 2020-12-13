#include <iostream>
 
using namespace std;
 
int main() {
 
    int N;
    int X[1000];
    
    cin >> N;
    
    for(int i = 0; i < N; i++)
        cin >> X[i];
    
    int minimo = X[0];
    int posicao = 0;
    
    for(int i = 1; i < N; i++)
        if(X[i] < minimo){
            minimo = X[i];
            posicao = i;
        }
    cout << "Menor valor: " << minimo << endl;
    cout << "Posicao: " << posicao << endl;
    
    return 0;
}