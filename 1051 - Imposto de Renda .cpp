#include <iostream>
#include <iomanip>

using namespace std;
 
int main(){
 
    double saldo;
    cin >> saldo;
    
    cout << fixed << setprecision(2);
    
    if(saldo <= 2000.0){
        cout << "Isento" << endl; 
    }else if(saldo <= 3000.0){
        cout << "R$ " << (0.08 * (saldo - 2000)) << endl;
    }else if(saldo <= 4500.0){
        cout << "R$ " << (0.08 * 1000) + (0.18 * (saldo - 3000)) << endl;
    }else{
        cout << "R$ " << (0.08 * 1000) + (0.18 * 1500) + (0.28 * (saldo - 4500)) << endl;
    }
 
    return 0;
}