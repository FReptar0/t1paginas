import React from 'react';
import Sidebar from '../components/SideBar';

const Index: React.FC = () => {
    return (
        <div>
            <Sidebar>
                {/* Contenido adicional dentro del Sidebar */}
            </Sidebar>
            <div>Contenido principal de la página</div>
        </div>
    );
};

export default Index;
